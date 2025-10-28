"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { formatCurrency } from "@/lib/utils";
import { Cart } from "@/types";
import { Loader, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function CartForm({ cart }: { cart?: Cart }) {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const handleUpdateItem = async (item: any, action: "add" | "remove") => {
    startTransition(async () => {
      const res =
        action === "add"
          ? await addItemToCart(item)
          : await removeItemFromCart(item.productId);

      if (!res.success) {
        toast({
          variant: "destructive",
          description: res.message,
        });
      }
      router.refresh();
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 dark:text-gray-100 tracking-tight flex items-center gap-2">
        <ShoppingBag className="w-8 h-8 text-primary" />
        Your Shopping Cart
      </h1>

      {!cart || cart.items.length === 0 ? (
        <Card className="flex flex-col items-center justify-center p-10 md:p-16 text-center shadow-lg rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Your cart is currently empty.
          </p>
          <Link href="/">
            <Button className="mt-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-200 hover:scale-105">
              Continue Shopping
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-3">
            <Card className="rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-100/60 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200">
                      <TableHead className="font-semibold">Product</TableHead>
                      <TableHead className="text-center font-semibold">
                        Quantity
                      </TableHead>
                      <TableHead className="text-right font-semibold">
                        Price
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cart.items.map((item) => (
                      <TableRow
                        key={item.slug}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all duration-150"
                      >
                        <TableCell>
                          <Link
                            href={`/product/${item.slug}`}
                            className="flex items-center gap-4 group"
                          >
                            <div className="relative w-16 h-16 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                              />
                            </div>
                            <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:underline line-clamp-2">
                              {item.name}
                            </span>
                          </Link>
                        </TableCell>

                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Button
                              disabled={isPending || item.qty <= 1}
                              variant="outline"
                              size="icon"
                              onClick={() => handleUpdateItem(item, "remove")}
                              className="rounded-full w-8 h-8"
                            >
                              {isPending ? (
                                <Loader className="w-4 h-4 animate-spin" />
                              ) : (
                                <Minus className="w-4 h-4" />
                              )}
                            </Button>
                            <span className="min-w-[24px] font-semibold">
                              {item.qty}
                            </span>
                            <Button
                              disabled={
                                isPending || item.qty >= item.countInStock
                              }
                              variant="outline"
                              size="icon"
                              onClick={() => handleUpdateItem(item, "add")}
                              className="rounded-full w-8 h-8"
                            >
                              {isPending ? (
                                <Loader className="w-4 h-4 animate-spin" />
                              ) : (
                                <Plus className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </TableCell>

                        <TableCell className="text-right font-semibold text-gray-800 dark:text-gray-100">
                          {formatCurrency(item.price)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-6">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
                  Order Summary
                </h2>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-700 dark:text-gray-300">
                    Subtotal ({cart.items.reduce((a, c) => a + c.qty, 0)} items)
                  </span>
                  <span className="font-bold text-lg">
                    {formatCurrency(cart.itemsPrice)}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  onClick={() =>
                    startTransition(() => router.push("/shipping-address"))
                  }
                  disabled={isPending}
                  className="w-full py-6 font-semibold text-lg rounded-full transition-transform duration-200 hover:scale-105"
                >
                  {isPending ? (
                    <>
                      <Loader className="animate-spin w-5 h-5 mr-2" />{" "}
                      Loading...
                    </>
                  ) : (
                    "Proceed to Checkout"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
