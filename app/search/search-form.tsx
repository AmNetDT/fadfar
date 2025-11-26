"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

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

export default function SearchForm({
  categories,
  searchParams,
}: {
  categories: { name: string; value: string }[];
  searchParams: {
    q?: string;
    category?: string;
    price?: string;
    rating?: string;
    sort?: string;
    page?: string;
    promo_id?: number;
  };
}) {
  const {
    q = "all",
    category = "all",
    price = "all",
    rating = "all",
    sort = "newest",
    page = "1",
    promo_id = "all",
  } = searchParams;

  const [showFilters, setShowFilters] = useState(false);

  const getFilterUrl = (params: Partial<typeof searchParams>) => {
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
      }).reduce(
        (acc, [key, value]) => {
          if (value !== undefined) {
            acc[key] = String(value); // ensure everything is a string
          }
          return acc;
        },
        {} as Record<string, string>
      )
    ).toString()}`;
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Mobile filter button */}
        <div className="md:hidden mb-4">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {/* Sidebar – hidden on mobile when !showFilters */}
        <div
          className={`${
            showFilters ? "block" : "hidden"
          } md:block md:w-1/5 border-r pr-4`}
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Category</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href={getFilterUrl({ category: "all" })}
                  className={`${category === "all" && "text-primary"}`}
                >
                  Any
                </Link>
              </li>
              {categories.map(({ name, value }) => (
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

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Price</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href={getFilterUrl({ price: "all" })}
                  className={`${price === "all" && "text-primary"}`}
                >
                  Any
                </Link>
              </li>
              {prices.map(({ name, value }) => (
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
            <h3 className="text-xl font-semibold mb-2">Customer Review</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href={getFilterUrl({ rating: "all" })}
                  className={`${rating === "all" && "text-primary"}`}
                >
                  Any
                </Link>
              </li>
              {ratings.map(({ name, value }) => (
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

        {/* Main content */}
        <div className="md:w-4/5 space-y-6">
          {/* Search summary & sort */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-green-100 p-4 border-2 border-green-500 rounded">
              {["q", "category", "price", "rating"].map((key) => {
                const value = searchParams[key as keyof typeof searchParams];
                return value !== "all" ? (
                  <span key={key} className="mr-2">
                    {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                  </span>
                ) : null;
              })}
              {(q !== "all" ||
                category !== "all" ||
                price !== "all" ||
                rating !== "all") && (
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href="/search">Clear</Link>
                </Button>
              )}
            </div>

            <div className="sm:w-1/3 bg-green-50 p-4 border-2 border-green-500 rounded">
              <span className="mr-2">Sort by</span>
              {sortOrders.map((s) => (
                <Link
                  key={s}
                  className={`mx-1 ${sort === s && "text-primary"}`}
                  href={getFilterUrl({ sort: s })}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Search form */}
          <form action="/search" method="GET" className="w-full">
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              {/* Category selector – hidden on very small screens */}
              <div className="w-full sm:w-auto">
                <Select name="category">
                  <SelectTrigger className="p-4 bg-white text-black hover:bg-green-50 hover:text-orange-500 text-base border-none w-full">
                    <SelectValue placeholder="SORT BY CATEGORY" />
                  </SelectTrigger>
                  <SelectContent className="p-2 bg-white text-base rounded-none w-full">
                    <SelectItem key={"All"} value={"all"} className="text-base">
                      All Stocks
                    </SelectItem>
                    {categories.map((category: { name: string }) => (
                      <SelectItem
                        key={category.name}
                        value={category.name}
                        className="hover:text-black text-base"
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search input – grows to fill available space */}
              <Input
                name="q"
                type="text"
                className="text-base p-3 border-2 border-slate-300 rounded-none flex-1"
                placeholder="Search products..."
              />

              <Button className="p-4 bg-orange-500 text-white text-base font-light w-full sm:w-auto">
                <SearchIcon className="mr-2" />
                Search
              </Button>
            </div>
          </form>

          {/* Product grid – fully responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* You'll need to fetch and render products here – this is just a placeholder */}
            <div className="col-span-full text-center py-8">
              Products will be rendered here.
            </div>
          </div>

          {/* Pagination */}
          {/* <Pagination page={page} totalPages={products.totalPages} /> */}
        </div>
      </div>
    </div>
  );
}
