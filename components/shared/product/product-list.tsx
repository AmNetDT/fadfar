import { Product } from '@/types'
import ProductCard from './product-card'
import ProductCategory from './product-category'
import Link from 'next/link'

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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {/* I used truncate to restrict the paragraph sentence from spreading to another line */}
            {data
              .filter(
                (product: Product) =>
                  product.category === 'CLOTHES AND UNDERWEARS'
              )
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

      {data.length > 0 ? (
        <div>
          <div className="flex text-left bg-lime-600 text-slate-100 p-4 rounded-t-lg">
            <div className="w-4/5">COSMETICS &amp; BEAUTY CARE</div>
            <div className="w-1/5 text-right">
              <Link
                className="rounded border-2 p-2 border-slate-100 text-slate-100"
                href={{
                  pathname: '/search',
                  query: { category: 'COSMETICS & BEAUTY CARE' },
                }}
              >
                View All
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-2 -mb-5 bg-lime-50 border-t-2 border-yellow-300">
            {/* I used truncate to restrict the paragraph sentence from spreading to another line */}
            {data
              .filter(
                (product: Product) =>
                  product.category === 'COSMETICS & BEAUTY CARE'
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
          <div className="flex text-left bg-orange-600 text-slate-100 p-4 rounded-t-lg">
            <div className="w-4/5">BABY CARES - FOODS</div>
            <div className="w-1/5 text-right">
              <Link
                className="rounded border-2 p-2 border-slate-100 text-slate-100"
                href={{
                  pathname: '/search',
                  query: { category: 'BABY CARES - FOODS' },
                }}
              >
                View All
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-2 -mb-5 bg-orange-50 border-t-2 border-yellow-300">
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
          <div className="flex text-left bg-blue-900 text-slate-100 p-4 rounded-t-lg">
            <div className="w-4/5">BISCUITS AND CONFECTIONAL</div>
            <div className="w-1/5 text-right">
              <Link
                className="rounded border-2 p-2 border-slate-100 text-slate-100"
                href={{
                  pathname: '/search',
                  query: { category: 'BISCUITS AND CONFECTIONAL' },
                }}
              >
                View All
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-blue-50 lg:grid-cols-6 gap-2 p-1">
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

      {latestProducts.length > 0 ? (
        <div>
          <div className="flex text-left text-2xl text-slate-700 px-0 pb-2 mt-20 mb-4 border-b-8 border-slate-500 text-nowrap">
            <div className="w-4/5">Trending Products</div>
            <div className="w-1/5 text-right">
              <Link
                className="rounded border-2 p-2 border-gray-600 text-gray-600 text-sm"
                href="/search"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {latestProducts.map((product) => (
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
