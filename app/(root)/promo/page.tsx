import ProductCategory from '@/components/shared/product/product-category'
import { Product } from '@/types'
import { Link } from 'lucide-react'

const Promo = async ({ data }: { data: Product[] }) => {
  return (
    <div>
      <div className="flex text-left p-4 rounded-t-lg">
        <div className="w-4/5">
          <p className="bg-orange-600 text-slate-100 text-wrap p-4">
            BABY CARES - FOODS
          </p>
        </div>
        <div className="w-1/5 text-right">
          <Link
            className="rounded border-2 border-slate-100 text-black text-wrap p-4"
            href="/search"
          >
            View All
          </Link>
        </div>
      </div>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {/* I used truncate to restrict the paragraph sentence from spreading to another line */}
            {data
              .filter((product: Product) => product.promo_id === 2)
              .slice(0, 6) // limit to 6 items
              .map((product: Product) => (
                <ProductCategory key={product.slug} product={product} />
              ))}
          </div>
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </div>
  )
}

export default Promo
