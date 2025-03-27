import React from 'react'
import { getAllPromo } from '@/lib/actions/product.actions'
import Promo from '../(root)/promo/page'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import ProductPromotion from '@/components/shared/product/product-promotion'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const promoProducts = await getAllPromo()

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper my-20">
        {children}
        <div className="mt-40">
          <Promo data={promoProducts} />
        </div>
      </main>
      <ProductPromotion />
      <Footer />
    </div>
  )
}
