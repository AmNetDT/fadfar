import { Product } from '@/types'
import ProductCard from './product-card'

const ProductList = async ({
  title,
  data,
}: {
  title: string
  data: Product[]
}) => {
  return (
    <>
      <p className="text-left bg-slate-600 text-slate-100 p-4 mb-0 leading-none inline-block">
        BABY CARES - FOODS
      </p>
      {data.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-green-300 p-4">
          {data
            .filter(
              (product: Product) => product.category === 'BABY CARES - FOODS'
            )
            .slice(0, 6) // limit to 6 items
            .map((product: Product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}

      <p className="text-left bg-orange-500 text-slate-100 p-4 mb-0 leading-none inline-block">
        NESTLE
      </p>

      {data.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 pb-4 gap-4 border-2 border-slate-500 mt-0">
          {data
            .filter((product: Product) => product.brand === 'NESTLE')
            .slice(0, 6) // limit to 6 items
            .map((product: Product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}

      <h2 className="h2-bold">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {data.map((product: Product) => (
            <div key={product.slug}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </>
  )
}

export default ProductList
