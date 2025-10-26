import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { auth } from "@/auth";
import CheckoutSteps from "@/components/shared/checkout-steps";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getMyCart } from "@/lib/actions/cart.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { APP_NAME } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import PlaceOrderForm from "./place-order-form";

export const metadata = {
  title: `Place Order - ${APP_NAME}`,
};

export default async function PlaceOrderPage() {
  const session = await auth();
  const cart = await getMyCart();
  const user = await getUserById(session?.user.id!);

  if (!cart || cart.items.length === 0) redirect("/cart");
  if (!user.address) redirect("/shipping-address");
  if (!user.paymentMethod) redirect("/payment-method");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Checkout Progress */}
      <CheckoutSteps current={3} />

      {/* Title */}
      <h1 className="text-3xl font-bold text-center md:text-left text-gray-800">
        Place Your Order
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Address */}
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-gray-800">
                Shipping Address
              </h2>
              <div className="text-sm md:text-base">
                <p className="font-medium">{user.address.fullName}</p>
                <p className="text-muted-foreground">
                  {user.address.streetAddress}, {user.address.city},{" "}
                  {user.address.postalCode}, {user.address.country}
                </p>
              </div>
              <div className="pt-3">
                <Link href="/shipping-address">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-gray-800">
                Payment Method
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                {user.paymentMethod}
              </p>
              <div className="pt-3">
                <Link href="/payment-method">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2 text-gray-800">
                Order Items
              </h2>

              <div className="overflow-x-auto rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead className="text-center">Qty</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cart.items.map((item) => (
                      <TableRow key={item.slug}>
                        <TableCell>
                          <Link
                            href={`/product/${item.slug}`}
                            className="flex items-center gap-3 hover:text-primary transition"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={55}
                              height={55}
                              className="rounded-md object-cover border"
                            />
                            <span className="font-medium">{item.name}</span>
                          </Link>
                        </TableCell>
                        <TableCell className="text-center">
                          {item.qty}
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          {formatCurrency(item.price)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <Link href="/cart">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN - SUMMARY */}
        <div className="lg:col-span-1">
          <Card className="shadow-md hover:shadow-lg transition-all duration-300 sticky top-24">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2 text-gray-800">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm md:text-base">
                <div className="flex justify-between">
                  <span>Items</span>
                  <span className="font-medium">
                    {formatCurrency(cart.itemsPrice)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="font-medium">
                    {formatCurrency(cart.taxPrice)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium">
                    {formatCurrency(cart.shippingPrice)}
                  </span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(cart.totalPrice)}</span>
                </div>
              </div>

              <PlaceOrderForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
