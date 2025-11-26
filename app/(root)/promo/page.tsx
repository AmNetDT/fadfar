import type { Product } from "@/types";
import Promo from "@/components/shared/product/promo";
import { getAllProducts } from "@/lib/actions/product.actions";

interface PromoPageProps {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
}

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

export const metadata = {
  title: "Flash Sales and Promos",
  description: "Check out the latest deals and flash sales.",
};
