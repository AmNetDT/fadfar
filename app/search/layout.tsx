import React from "react";
import { getAllPromo } from "@/lib/actions/product.actions";
import Promo from "@/components/shared/product/promo";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import ProductPromotion from "@/components/shared/product/product-promotion";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const promoProducts = await getAllPromo();

  // `Promo` expects `data?: Product[]`
  // Ensure we always pass an array (even if the fetch returns something unexpected)
  const safePromoData = Array.isArray(promoProducts) ? promoProducts : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 my-8 md:my-20">
        {children}

        <div className="mt-8 md:mt-40">
          <Promo data={safePromoData} />
        </div>
      </main>

      <ProductPromotion />

      <Footer />
    </div>
  );
}
