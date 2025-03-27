import ProductCategory from '@/components/shared/product/product-category'
import { Product } from '@/types'
import Link from 'next/link'

const Promo = ({ data }: { data: Product[] }) => {
  return (
    <div>
      <div className="flex text-left text-white text-2xl pb-4 rounded-t-lg">
        <div className="w-5/6">
          <span className="bg-red-600 p-3 text-wrap">Flash Sales</span>
        </div>
        <div className="w-1/5 text-right">
          <Link
            className="rounded border-2 p-2 border-slate-100 text-slate-100 text-sm"
            href={{
              pathname: '/search',
              query: { promo_id: 2 },
            }}
          >
            View All
          </Link>
        </div>
      </div>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {data
              .filter((product: Product) => product.promo_id === 2)
              .slice(0, 6)
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
