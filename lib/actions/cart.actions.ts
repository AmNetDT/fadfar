"use server";

import { auth } from "@/auth";
import db from "@/db/drizzle";
import { carts, products } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { cartItemSchema } from "../validator";
import { formatError, round2 } from "../utils";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// ----------------------------------------------------
// ⿡  Helper – make sure every item has `countInStock`
// ----------------------------------------------------
function withCountInStock(
  item: z.infer<typeof cartItemSchema>,
  product: typeof products.$inferSelect
) {
  return {
    ...item,
    countInStock: product.stock, // ← add the missing field
  };
}

// ----------------------------------------------------
// ⿢  Price calculation (unchanged)
// ----------------------------------------------------
const calcPrice = (items: z.infer<typeof cartItemSchema>[]) => {
  const itemsPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const shippingPrice = round2(itemsPrice > 100 ? 0 : 10);
  const taxPrice = round2(0.15 * itemsPrice);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  return {
    itemsPrice: itemsPrice.toFixed(2),
    shippingPrice: shippingPrice.toFixed(2),
    taxPrice: taxPrice.toFixed(2),
    totalPrice: totalPrice.toFixed(2),
  };
};

// ----------------------------------------------------
// ⿣  Get cart (unchanged)
// ----------------------------------------------------
export async function getMyCart() {
  const sessionCartId = cookies().get("sessionCartId")?.value;
  if (!sessionCartId) return undefined;

  const session = await auth();
  const userId = session?.user.id;

  const cart = await db.query.carts.findFirst({
    where: userId
      ? eq(carts.userId, userId)
      : eq(carts.sessionCartId, sessionCartId),
  });

  return cart;
}

// ----------------------------------------------------
// ⿤  Add item to cart – fixed
// ----------------------------------------------------
export const addItemToCart = async (data: z.infer<typeof cartItemSchema>) => {
  try {
    const sessionCartId = cookies().get("sessionCartId")?.value;
    if (!sessionCartId) throw new Error("Cart Session not found");

    const session = await auth();
    const userId = session?.user.id as string | undefined;

    const cart = await getMyCart();
    const rawItem = cartItemSchema.parse(data); // ← parsed item
    const product = await db.query.products.findFirst({
      where: eq(products.id, rawItem.productId),
    });
    if (!product) throw new Error("Product not found");

    // -------------------------------------------------
    // Add the missing `countInStock` field
    // -------------------------------------------------
    const item = withCountInStock(rawItem, product);

    // -------------------------------------------------
    // Create a new cart if none exists
    // -------------------------------------------------
    if (!cart) {
      if (product.stock < 1) throw new Error("Not enough stock");

      await db.insert(carts).values({
        userId,
        items: [item],
        sessionCartId,
        ...calcPrice([item]),
      });

      revalidatePath(`/product/${product.slug}`);
      return { success: true, message: "Item added to cart successfully" };
    }

    // -------------------------------------------------
    // Existing cart – update the items array
    // -------------------------------------------------
    const existItem = cart.items.find((x) => x.productId === item.productId);

    if (existItem) {
      if (product.stock < existItem.qty + 1)
        throw new Error("Not enough stock");
      existItem.qty += 1; // mutate the existing object (it already has countInStock)
    } else {
      if (product.stock < 1) throw new Error("Not enough stock");
      cart.items.push(item); // `item` now has countInStock
    }

    await db
      .update(carts)
      .set({
        items: cart.items,
        ...calcPrice(cart.items),
      })
      .where(and(eq(carts.id, cart.id)));

    revalidatePath(`/product/${product.slug}`);
    return {
      success: true,
      message: `${product.name} ${
        existItem ? "updated in" : "added to"
      } cart successfully`,
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
};

// ----------------------------------------------------
// ⿥  Remove item from cart – fixed (keeps countInStock)
// ----------------------------------------------------
export const removeItemFromCart = async (productId: string) => {
  try {
    const sessionCartId = cookies().get("sessionCartId")?.value;
    if (!sessionCartId) throw new Error("Cart Session not found");

    const product = await db.query.products.findFirst({
      where: eq(products.id, productId),
    });
    if (!product) throw new Error("Product not found");

    const cart = await getMyCart();
    if (!cart) throw new Error("Cart not found");

    const exist = cart.items.find((x) => x.productId === productId);
    if (!exist) throw new Error("Item not found");

    // Decrease quantity or remove the item
    if (exist.qty === 1) {
      cart.items = cart.items.filter((x) => x.productId !== exist.productId);
    } else {
      exist.qty -= 1; // keep the original countInStock value
    }

    await db
      .update(carts)
      .set({
        items: cart.items,
        ...calcPrice(cart.items),
      })
      .where(eq(carts.id, cart.id));

    revalidatePath(`/product/${product.slug}`);
    return {
      success: true,
      message: `${product.name} ${
        cart.items.find((x) => x.productId === productId)
          ? "updated in"
          : "removed from"
      } cart successfully`,
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
};
