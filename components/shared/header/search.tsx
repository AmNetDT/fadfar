// components/shared/header/search.tsx
"use client";
// Removed getAllCategories import

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";

// Define the expected props
interface SearchProps {
  categories: { name: string }[];
}

// Accepts categories as props, removes 'async' keyword
export default function Search({ categories }: SearchProps) {
  return (
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
              {/* Uses the props passed from the server wrapper */}
              {categories.map((category) => (
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
  );
}
