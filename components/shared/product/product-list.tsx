import { Product } from '@/types'
import ProductCard from './product-card'
import ProductCategory from './product-category'

const ProductList = async ({ data }: { data: Product[] }) => {
  // Group products by category and get the last updated one
  const latestProducts = Object.values(
    data.reduce(
      (acc, product) => {
        if (
          !acc[product.brand] ||
          product.createdAt > acc[product.brand].createdAt
        ) {
          acc[product.category] = product
        }
        return acc
      },
      {} as Record<string, Product>
    )
  )

  return (
    <>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-2 -mb-7 -mt-2 bg-yellow-100 p-1">
            {/* I used truncate to restrict the paragraph sentence from spreading to another line */}
            {data
              .filter((product: Product) => (product.promo_id = 2))
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

      {latestProducts.length > 0 ? (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 -mb-5 p-1">
            {latestProducts.map((product) => (
              <ProductCategory key={product.slug} product={product} />
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

      {data.length > 0 ? (
        <div>
          <div className="text-left text-3xl text-slate-700 p-4 text-nowrap">
            Trending Products
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-1">
            {data.map((product: Product) => (
              <div key={product.slug}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
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
