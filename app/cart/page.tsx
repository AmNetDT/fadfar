import { getMyCart } from "@/lib/actions/cart.actions";
import CartForm from "./cart-form";

export const metadata = {
  title: `Shopping Cart - ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

export default async function CartPage() {
  const rawCart = await getMyCart();

  // Normalise the numeric fields
  const cart = rawCart
    ? {
        ...rawCart,
        itemsPrice: Number(rawCart.itemsPrice),
        shippingPrice: Number(rawCart.shippingPrice),
        taxPrice: Number(rawCart.taxPrice),
        totalPrice: Number(rawCart.totalPrice),
      }
    : undefined;

  return <CartForm cart={cart} />;
}
