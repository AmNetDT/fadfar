// @/components/sections/Promo.tsx (The Client Component)

"use client";

import React, { useMemo } from "react";
import ProductCategory from "@/components/shared/product/product-category";
import { Product } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PromoProps {
  data: Product[];
}

const Promo: React.FC<PromoProps> = ({ data }) => {
  // Filter promo items first and limit to a maximum of 6 for the grid display
  const promoProducts = useMemo(() => {
    return data.filter((product) => product.promo_id === 2).slice(0, 6);
  }, [data]);

  return (
    <section className="w-full pb-10 px-3 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 mb-6 sm:mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-lime-100 tracking-tight">
          <span className="relative inline-block">
            {/* Cleaner, more subtle accent */}
            <span className="text-red-600 dark:text-red-600">⚡</span> Flash
            Sales
          </span>
        </h2>

        <Button
          asChild
          size="sm"
          className="
                        rounded-full text-sm sm:text-base font-semibold 
                        text-white bg-transparent 
                        hover:bg-red-600 hover:text-white transition-colors duration-200 
                        shadow-md
                    "
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
        <div
          className="
                        grid
                        grid-cols-2          /* 2 items on mobile */
                        sm:grid-cols-3       /* 3 items on small */
                        md:grid-cols-4       /* 4 items on medium */
                        lg:grid-cols-6       /* 6 items on large */
                        gap-3 sm:gap-4 md:gap-5 w-full
                    "
        >
          {promoProducts.map((product, index) => (
            <div
              key={product.slug}
              className={`
                                w-full h-full
                                bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl
                                transition-all duration-300 hover:scale-[1.03] overflow-hidden
                                
                                /* RESPONSIVE FIX: Use Tailwind's grid features to manage visibility */
                                ${index >= 3 ? "hidden sm:block" : ""} /* Hide 4th+ item on screens smaller than sm */
                                ${index >= 4 ? "hidden md:block" : ""} /* Hide 5th+ item on screens smaller than md */
                                ${index >= 6 ? "hidden lg:block" : ""} /* This line is redundant as we slice to 6 */
                            `}
            >
              <ProductCategory product={product} />
            </div>
          ))}
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
