import { carts, orderItems, orders, products, reviews } from "@/db/schema";
import {
  cartItemSchema,
  paymentResultSchema,
  shippingAddressSchema,
} from "@/lib/validator";
import { InferSelectModel } from "drizzle-orm";
import { z } from "zod";

/* ------------------------- PRODUCT & REVIEW TYPES ------------------------- */

export type Product = InferSelectModel<typeof products>;

export type Review = InferSelectModel<typeof reviews> & {
  user?: {
    name: string | null;
  };
};

/* ------------------------------ CART TYPES ------------------------------ */

// Base cart item shape for frontend use
export interface CartItem {
  name: string;
  image: string;
  productId: string;
  slug: string;
  price: number;
  qty: number;
  countInStock: number;
}

// Full cart object (used in frontend cart context)
export interface Cart {
  items: CartItem[];
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

// Database model for cart table
export type CartModel = InferSelectModel<typeof carts>;

// Zod-validated variants (for validation or API)
export type CartItemInput = z.infer<typeof cartItemSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
export type PaymentResult = z.infer<typeof paymentResultSchema>;

/* ------------------------------ ORDER TYPES ------------------------------ */

export type OrderItem = InferSelectModel<typeof orderItems>;

export type Order = InferSelectModel<typeof orders> & {
  orderItems: OrderItem[];
  user: {
    name: string | null;
    email: string;
  };
};
