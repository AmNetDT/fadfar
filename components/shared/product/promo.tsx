"use client";

import React, { useMemo } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import ProductCategory from "@/components/shared/product/product-category";
import type { Product } from "@/types";

interface PromoProps {
  data?: Product[];
}

const Promo: React.FC<PromoProps> = ({ data = [] }) => {
  const promoProducts = useMemo(() => {
    if (!Array.isArray(data)) return [];
    // Keep only products with promo_id === 2 and limit to the first 6
    return data.filter((p) => p?.promo_id === 2).slice(0, 6);
  }, [data]);

  return (
    <section className="w-full pb-10 px-3 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 mb-6 sm:mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h2 className="text-2xl sm:text-2xl bg-red-600 rounded-xl p-3 font-bold text-white dark:text-lime-100 tracking-tight">
          <span className="relative inline-block">
            <span className="text-red-600 dark:text-red-600">⚡</span> Flash
            Sales
          </span>
        </h2>
        <Button
          asChild
          size="sm"
          className="rounded-full text-sm sm:text-base font-semibold text-white bg-orange-600 hover:bg-red-600 hover:text-white transition-colors duration-200 shadow-md"
        >
          <Link href={{ pathname: "/search", query: { promo_id: 2 } }}>
            View All Deals →
          </Link>
        </Button>
      </div>

      {/* Products Grid */}
      {promoProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 w-full">
          {promoProducts.map((product, index) => {
            // Visibility classes – static so Tailwind can pick them up
            let visibility = "";
            if (index >= 2) visibility = "hidden sm:block";
            if (index >= 4) visibility = "hidden md:block";
            if (index >= 6) visibility = "hidden lg:block";

            return (
              <div
                key={product.id} // product.id is assumed to be unique
                className={`w-full h-full bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] overflow-hidden ${visibility}`}
              >
                <ProductCategory product={product} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-8 text-sm sm:text-base">
          No flash sale products available.
        </div>
      )}
    </section>
  );
};

export default Promo;
