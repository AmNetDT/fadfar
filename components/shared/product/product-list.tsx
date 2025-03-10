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
      {data.length > 0 ? (
        <div>
          <div className="text-left bg-orange-500  text-slate-100 p-4 rounded-t-lg">
            BABY CARES - FOODS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-2 -mb-5 bg-slate-100 border-t-2 border-yellow-300 p-1">
            {/* I used truncate to restrict the paragraph sentence from spreading to another line */}
            {data
              .filter(
                (product: Product) => product.category === 'BABY CARES - FOODS'
              )
              .slice(0, 6) // limit to 6 items
              .map((product: Product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
          </div>
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}

      {data.length > 0 ? (
        <div>
          <div className="text-left bg-lime-300  text-slate-700 p-4 rounded-t-lg">
            BISCUITS AND CONFECTIONAL
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-1">
            {data
              .filter(
                (product: Product) =>
                  product.category === 'BISCUITS AND CONFECTIONAL'
              )
              .slice(0, 6) // limit to 6 items
              .map((product: Product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
          </div>
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
