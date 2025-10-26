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
import { Loader, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function CartForm({ cart }: { cart?: Cart }) {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  // Optimized helper function to encapsulate the update logic
  const handleUpdateItem = async (item: any, action: "add" | "remove") => {
    // Disable buttons and start transition immediately
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
      // Re-fetch or re-route if necessary to update the UI
      router.refresh();
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
        Shopping Cart
      </h1>

      {!cart || cart.items.length === 0 ? (
        <Card className="flex flex-col items-center justify-center p-8 md:p-12 text-center shadow-lg">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            Your cart is empty.
          </p>
          <Link href="/">
            <Button className="mt-4 px-8 py-3 text-base">Start Shopping</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-3">
            <Card>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 dark:bg-gray-800">
                      <TableHead className="w-[100px] font-semibold text-gray-700 dark:text-gray-200">
                        Item
                      </TableHead>
                      <TableHead className="font-semibold text-center text-gray-700 dark:text-gray-200">
                        Quantity
                      </TableHead>
                      <TableHead className="font-semibold text-right text-gray-700 dark:text-gray-200">
                        Price
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cart.items.map((item) => (
                      <TableRow
                        key={item.slug}
                        className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
                      >
                        <TableCell>
                          <Link
                            href={`/product/${item.slug}`}
                            className="flex items-center space-x-4 group"
                          >
                            <div className="relative w-16 h-16 shrink-0">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-md border"
                                sizes="(max-width: 768px) 100vw, 33vw"
                              />
                            </div>
                            <div className="flex-grow">
                              <span className="font-medium group-hover:underline">
                                {item.name}
                              </span>
                            </div>
                          </Link>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Button
                              disabled={isPending || item.qty <= 1}
                              variant="outline"
                              size="icon"
                              onClick={() => handleUpdateItem(item, "remove")}
                            >
                              {isPending ? (
                                <Loader className="w-4 h-4 animate-spin" />
                              ) : (
                                <Minus className="w-4 h-4" />
                              )}
                            </Button>
                            <span className="min-w-[20px] text-center font-medium">
                              {item.qty}
                            </span>
                            <Button
                              disabled={
                                isPending || item.qty >= item.countInStock
                              }
                              variant="outline"
                              size="icon"
                              onClick={() => handleUpdateItem(item, "add")}
                            >
                              {isPending ? (
                                <Loader className="w-4 h-4 animate-spin" />
                              ) : (
                                <Plus className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          {formatCurrency(item.price)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>

          <div>
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="pb-3 text-xl font-semibold border-b dark:border-gray-700">
                  Order Summary
                </div>
                <div className="flex justify-between items-center py-4 text-lg">
                  <span>
                    Subtotal ({cart.items.reduce((a, c) => a + c.qty, 0)} items)
                  </span>
                  <span className="font-bold">
                    {formatCurrency(cart.itemsPrice)}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() =>
                    startTransition(() => router.push("/shipping-address"))
                  }
                  className="w-full text-base py-6 font-semibold transition-transform duration-200 hover:scale-105"
                  disabled={isPending}
                >
                  {isPending ? (
                    <Loader className="animate-spin w-5 h-5 mr-2" />
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
