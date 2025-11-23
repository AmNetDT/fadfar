import type { InferGetServerSidePropsType } from "next";

import Promo from "@/components/shared/product/promo"; // <-- corrected path
import { getAllProducts } from "@/lib/actions/product.actions";
import type { Product } from "@/types";

// -------------------------------------------------------------------
// Page props type (Next.js 13+ App Router)
interface PageProps {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
}

// -------------------------------------------------------------------
// Helper type for the shape returned by getAllProducts
type ProductsResponse = {
  data?: Product[];
  error?: string;
};

// -------------------------------------------------------------------
export default async function PromoPage({}: PageProps) {
  // Fetch all products; filter on the server if your action supports it
  //const response: ProductsResponse = await getAllProducts({ promo_id: 2 });
  const response = await getAllProducts({
    query: "", // empty string if you don’t need a search term
    category: "", // empty string if you don’t want to filter by category
    page: 1, // first page
    promo_id: 2, // your filter
  });

  // Guard against missing data
  const products = response?.data ?? [];

  return (
    <div className="container mx-auto">
      <Promo data={products} />
    </div>
  );
}

// Optional metadata (App Router)
export const metadata = {
  title: "Flash Sales and Promos",
  description: "Check out the latest deals and flash sales.",
};
