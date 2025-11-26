import { getAllCategories } from "@/lib/actions/product.actions";
import SearchForm from "./search-form";

type SearchPageProps = {
  searchParams: {
    q?: string;
    category?: string;
    price?: string;
    rating?: string;
    sort?: string;
    page?: string;
    promo_id?: number;
  };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const categories = (await getAllCategories()).map((c: { name: string }) => ({
    name: c.name,
    value: c.name,
  }));

  return <SearchForm categories={categories} searchParams={searchParams} />;
}
