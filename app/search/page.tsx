import Pagination from "@/components/shared/pagination";
import ProductCard from "@/components/shared/product/product-card";
import { Button } from "@/components/ui/button";
import {
  getAllCategories,
  getAllProducts,
} from "@/lib/actions/product.actions";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";

const sortOrders = ["newest", "lowest", "highest", "rating"];
const prices = [
  { name: "N100 to N10,000", value: "100-10000" },
  { name: "N10,001 to N20,000", value: "10001-20000" },
  { name: "N20,001 to N100,000", value: "20001-100000" },
];
const ratings = [
  { name: "5 stars & up", value: "5" },
  { name: "4 stars & up", value: "4" },
  { name: "3 stars & up", value: "3" },
  { name: "2 stars & up", value: "2" },
  { name: "1 star & up", value: "1" },
];

export async function generateMetadata({ searchParams }: any) {
  const {
    q = "all",
    category = "all",
    price = "all",
    rating = "all",
    promo_id = "all",
  } = searchParams;
  const filters = [
    q !== "all" && `Query: ${q}`,
    category !== "all" && `Category: ${category}`,
    price !== "all" && `Price: ${price}`,
    rating !== "all" && `Rating: ${rating}`,
    promo_id !== "all" && `Promo: ${promo_id}`,
  ].filter(Boolean);
  return {
    title: filters.length
      ? `Search ${filters.join(" | ")} - ${APP_NAME}`
      : `Search Products - ${APP_NAME}`,
  };
}

export default async function SearchPage({ searchParams }: any) {
  const {
    q = "all",
    category = "all",
    price = "all",
    rating = "all",
    sort = "newest",
    page = "1",
    promo_id = "all",
  } = searchParams;

  const categories = (await getAllCategories()).map((c: any) => ({
    name: c.name,
    value: c.name,
  }));

  const promoIdNumber = promo_id !== "all" ? Number(promo_id) : undefined;

  const products = await getAllProducts({
    category,
    query: q,
    price,
    rating,
    promo_id: promoIdNumber,
    page: Number(page),
    sort,
  });

  const getFilterUrl = (params: any) => {
    return `/search?${new URLSearchParams(
      Object.entries({
        q,
        category,
        price,
        rating,
        sort,
        page,
        promo_id,
        ...params,
      }).reduce((acc: any, [key, value]) => {
        if (value !== undefined) acc[key] = String(value);
        return acc;
      }, {})
    ).toString()}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden flex justify-end pr-3">
        <details className="w-full">
          <summary className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded text-center">
            Filters
          </summary>

          <div className="mt-3 bg-white p-4 shadow rounded space-y-4">
            {/* Category */}
            <div>
              <div className="text-lg font-semibold">Category</div>
              <ul className="space-y-1">
                <li>
                  <Link
                    href={getFilterUrl({ category: "all" })}
                    className={`${category === "all" && "text-primary"}`}
                  >
                    Any
                  </Link>
                </li>
                {categories.map(({ name, value }: any) => (
                  <li key={value}>
                    <Link
                      href={getFilterUrl({ category: value })}
                      className={`${category === value && "text-primary"}`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div>
              <div className="text-lg font-semibold">Price</div>
              <ul className="space-y-1">
                <li>
                  <Link
                    href={getFilterUrl({ price: "all" })}
                    className={`${price === "all" && "text-primary"}`}
                  >
                    Any
                  </Link>
                </li>
                {prices.map(({ name, value }: any) => (
                  <li key={value}>
                    <Link
                      href={getFilterUrl({ price: value })}
                      className={`${price === value && "text-primary"}`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rating */}
            <div>
              <div className="text-lg font-semibold">Customer Review</div>
              <ul className="space-y-1">
                <li>
                  <Link
                    href={getFilterUrl({ rating: "all" })}
                    className={`${rating === "all" && "text-primary"}`}
                  >
                    Any
                  </Link>
                </li>
                {ratings.map(({ name, value }: any) => (
                  <li key={value}>
                    <Link
                      href={getFilterUrl({ rating: value })}
                      className={`${rating === value && "text-primary"}`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block space-y-4 pl-3">
        <div>
          <div className="text-xl pt-3">Category</div>
          <ul className="space-y-1">
            <li>
              <Link
                href={getFilterUrl({ category: "all" })}
                className={`${category === "all" && "text-primary"}`}
              >
                Any
              </Link>
            </li>
            {categories.map(({ name, value }: any) => (
              <li key={value}>
                <Link
                  href={getFilterUrl({ category: value })}
                  className={`${category === value && "text-primary"}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xl pt-3">Price</div>
          <ul className="space-y-1">
            <li>
              <Link
                href={getFilterUrl({ price: "all" })}
                className={`${price === "all" && "text-primary"}`}
              >
                Any
              </Link>
            </li>
            {prices.map(({ name, value }: any) => (
              <li key={value}>
                <Link
                  href={getFilterUrl({ price: value })}
                  className={`${price === value && "text-primary"}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xl pt-3">Customer Review</div>
          <ul className="space-y-1">
            <li>
              <Link
                href={getFilterUrl({ rating: "all" })}
                className={`${rating === "all" && "text-primary"}`}
              >
                Any
              </Link>
            </li>
            {ratings.map(({ name, value }: any) => (
              <li key={value}>
                <Link
                  href={getFilterUrl({ rating: value })}
                  className={`${rating === value && "text-primary"}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Products Section */}
      <div className="md:col-span-4 space-y-4 px-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 bg-green-100 p-4 border-2 border-green-500 rounded text-sm sm:text-base space-x-2">
            {["category", "price", "rating"].map((key) => {
              const value = searchParams[key];
              return value && value !== "all" ? (
                <span key={key}>{`${key}: ${value}`}</span>
              ) : null;
            })}
            {(q !== "all" ||
              category !== "all" ||
              price !== "all" ||
              rating !== "all") && (
              <Button variant="link" asChild>
                <Link href="/search">Clear</Link>
              </Button>
            )}
          </div>

          <div className="flex-1 bg-green-50 p-4 border-2 border-green-500 rounded text-sm sm:text-base">
            Sort by{" "}
            {sortOrders.map((s) => (
              <Link
                key={s}
                className={`mx-2 ${sort === s && "text-primary"}`}
                href={getFilterUrl({ sort: s })}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-blue-50 gap-2 p-1">
          {!products || products.data?.length === 0 ? (
            <div>No product found</div>
          ) : (
            products.data?.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        <div className="flex justify-center mt-4">
          {products?.totalPages > 1 && (
            <Pagination page={page} totalPages={products.totalPages} />
          )}
        </div>
      </div>
    </div>
  );
}
