import { Product } from "@/types";
import ProductCard from "./product-card";
import Link from "next/link";

interface ProductListProps {
  data: Product[];
}

const ProductList = async ({ data }: ProductListProps) => {
  // ✅ Get latest product per category
  const latestProducts = Object.values(
    data.reduce(
      (acc, product) => {
        if (
          !acc[product.category] ||
          product.createdAt > acc[product.category].createdAt
        ) {
          acc[product.category] = product;
        }
        return acc;
      },
      {} as Record<string, Product>
    )
  );

  // ✅ Helper: Render a reusable product section
  const renderSection = (
    title: string,
    color: string,
    bgColor: string,
    queryCategory: string
  ) => {
    const filtered = data
      .filter((product) => product.category === queryCategory)
      .slice(0, 6);

    if (filtered.length === 0) return null;

    return (
      <section className="mb-12">
        <div
          className={`flex flex-wrap justify-between items-center text-white px-4 py-3 rounded-t-xl ${color} shadow-md`}
        >
          <h2 className="text-lg font-semibold">{title}</h2>
          <Link
            href={{
              pathname: "/search",
              query: { category: queryCategory },
            }}
            className="text-sm border border-white px-3 py-1 rounded-lg hover:bg-white hover:text-gray-800 transition"
          >
            View All
          </Link>
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-3 ${bgColor} border-t-2 border-yellow-300 rounded-b-xl`}
        >
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="container mx-auto px-3 md:px-6 py-8 space-y-12">
      {/* ✅ Clothes and Underwears */}
      {renderSection(
        "Clothes & Underwears",
        "bg-emerald-700",
        "bg-emerald-50",
        "Clothes and Underwears"
      )}

      {/* ✅ Cosmetics */}
      {renderSection(
        "Cosmetics & Beauty Care",
        "bg-lime-700",
        "bg-lime-50",
        "Cosmetics & Beauty Care"
      )}

      {/* ✅ Baby Care */}
      {renderSection(
        "Baby Cares - Foods",
        "bg-orange-600",
        "bg-orange-50",
        "Baby Cares - Foods"
      )}

      {/* ✅ Biscuits */}
      {renderSection(
        "Biscuits & Confectionary",
        "bg-blue-800",
        "bg-blue-50",
        "Biscuits and Confectional"
      )}

      {/* ✅ Trending Section */}
      {latestProducts.length > 0 && (
        <section>
          <div className="flex flex-wrap justify-between items-center border-b-4 border-gray-600 pb-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Trending Products
            </h2>
            <Link
              href="/search"
              className="text-sm border border-gray-700 px-3 py-1 rounded-lg hover:bg-gray-700 hover:text-white transition"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {latestProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Fallback */}
      {data.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          <p>No products found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
