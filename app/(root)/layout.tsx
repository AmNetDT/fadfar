import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import ProductPromotion from "@/components/shared/product/product-promotion";
import React from "react";
import ProductCarousel from "@/components/shared/product/product-carousel";

import {
  getFeaturedProducts,
  getAllPromo,
} from "@/lib/actions/product.actions";

// 👇 Import the *section* component, not the page component
import Promo from "@/components/shared/product//promo";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch data on the server
  const featuredProducts = await getFeaturedProducts();
  const promoProducts = await getAllPromo();

  // `Promo` expects `data?: Product[]`
  // Ensure we always pass an array (even if the fetch returns something unexpected)
  const safePromoData = Array.isArray(promoProducts) ? promoProducts : [];

  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div className="w-screen bg-lime-700" style={{ height: "393px" }}>
        <div className="flex-1 wrapper p-0">
          {featuredProducts.length > 0 && (
            <ProductCarousel data={featuredProducts} />
          )}
        </div>
      </div>

      <div className="w-screen bg-lime-700" style={{ height: "393px" }}>
        <div className="flex-1 wrapper p-0">
          <Promo data={safePromoData} />
        </div>
      </div>

      <main className="flex-1 wrapper">{children}</main>

      <ProductPromotion />
      <Footer />
    </div>
  );
}
