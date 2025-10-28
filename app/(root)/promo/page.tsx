// @/components/sections/Promo.tsx (Client)
"use client";

import React, { useMemo } from "react";
import ProductCategory from "@/components/shared/product/product-category";
import { Product } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PromoProps {
  // Make data optional and loose-typed to avoid strict mismatch during build
  data?: any[];
}

const Promo: React.FC<PromoProps> = ({ data = [] }) => {
  // Guard: ensure we always work with an array
  const promoProducts = useMemo(() => {
    if (!Array.isArray(data)) return [];
    // filter and slice as before
    return data.filter((product) => product?.promo_id === 2).slice(0, 6);
  }, [data]);

  return (
    <section className="w-full pb-10 px-3 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 mb-6 sm:mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h2 className="text-2xl sm:text-3xl bg-red-600 rounded-xl p-3 font-extrabold text-white dark:text-lime-100 tracking-tight">
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
          <Link
            href={{
              pathname: "/search",
              query: { promo_id: 2 },
            }}
          >
            View All Deals →
          </Link>
        </Button>
      </div>

      {/* Products Grid */}
      {promoProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 w-full">
          {promoProducts.map((product: any, index: number) => {
            // compute visibility classes as before (precomputed so Tailwind picks them up)
            let visibilityClass = "";

            if (index >= 2) visibilityClass = "hidden sm:block"; // only 2 on mobile
            if (index >= 4) visibilityClass = "hidden md:block"; // only 4 on tablet
            if (index >= 6) visibilityClass = "hidden lg:block"; // only 6 on desktop

            return (
              <div
                key={product?.slug ?? index}
                className={`w-full h-full bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] overflow-hidden ${visibilityClass}`}
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
