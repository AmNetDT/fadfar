import type { InferGetServerSidePropsType } from "next";
import Promo from "@/components/shared/product/promo";
import { getAllProducts } from "@/lib/actions/product.actions";
import type { Product } from "@/types";

// Props that Next will give to the page
interface PromoPageProps {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Response shape from your server action
type ProductsResponse = {
  data?: Product[];
  error?: string;
};

export default async function PromoPage({
  params,
  searchParams,
}: PromoPageProps) {
  const response = await getAllProducts({
    query: "",
    category: "",
    page: 1,
    promo_id: 2,
  });

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
