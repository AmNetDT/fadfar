import EcommerceFeatures from '@/components/shared/product/ecommerce-features'
import ProductCarousel from '@/components/shared/product/product-carousel'
import ProductList from '@/components/shared/product/product-list'
import ProductPromotion from '@/components/shared/product/product-promotion'
import {
  getFeaturedProducts,
  getLatestProducts,
} from '@/lib/actions/product.actions'

export default async function Home() {
  const latestProducts = await getLatestProducts()
  const featuredProducts = await getFeaturedProducts()
  return (
    <div className="space-y-8">
      <div>
        {featuredProducts.length > 0 && (
          <ProductCarousel data={featuredProducts} />
        )}
        <div className="space-y-8">
          <ProductList title="" data={latestProducts} />
          <ProductPromotion />
          <EcommerceFeatures />
        </div>
      </div>
    </div>
  )
}
