import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import ProductPromotion from '@/components/shared/product/product-promotion'
import React from 'react'
import ProductCarousel from '@/components/shared/product/product-carousel'
import { getFeaturedProducts } from '@/lib/actions/product.actions'
import { getAllPromo } from '@/lib/actions/product.actions'
import Promo from './promo/page'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const featuredProducts = await getFeaturedProducts()
  const promoProducts = await getAllPromo()

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="w-screen bg-lime-700" style={{ height: '393px' }}>
        <div className="flex-1 wrapper p-0">
          {featuredProducts.length > 0 && (
            <ProductCarousel data={featuredProducts} />
          )}
        </div>
      </div>

      <div className="w-screen bg-lime-700" style={{ height: '393px' }}>
        <div className="flex-1 wrapper p-0">
          <Promo data={promoProducts} />
        </div>
      </div>
      <main className="flex-1 wrapper">{children}</main>

      <ProductPromotion />

      <Footer />
    </div>
  )
}
