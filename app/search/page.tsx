import Pagination from '@/components/shared/pagination'
import ProductCard from '@/components/shared/product/product-card'
import { Button } from '@/components/ui/button'
import { getAllCategories, getAllProducts } from '@/lib/actions/product.actions'
import { APP_NAME } from '@/lib/constants'
import Link from 'next/link'

const sortOrders = ['newest', 'lowest', 'highest', 'rating']
const prices = [
  { name: 'N100 to N10,000', value: '100-10000' },
  { name: 'N10,001 to N20,000', value: '10001-20000' },
  { name: 'N20,001 to N100,000', value: '20001-100000' },
]
const ratings = [
  { name: '5 stars & up', value: '5' },
  { name: '4 stars & up', value: '4' },
  { name: '3 stars & up', value: '3' },
  { name: '2 stars & up', value: '2' },
  { name: '1 star & up', value: '1' },
]

export async function generateMetadata({
  searchParams,
}: {
  searchParams: {
    q?: string
    category?: string
    price?: string
    rating?: string
  }
}) {
  const {
    q = 'all',
    category = 'all',
    price = 'all',
    rating = 'all',
  } = searchParams
  const filters = [
    q !== 'all' && `Query: ${q}`,
    category !== 'all' && `Category: ${category}`,
    price !== 'all' && `Price: ${price}`,
    rating !== 'all' && `Rating: ${rating}`,
  ].filter(Boolean)

  return {
    title: filters.length
      ? `Search ${filters.join(' | ')} - ${APP_NAME}`
      : `Search Products - ${APP_NAME}`,
  }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    q?: string
    category?: string
    price?: string
    rating?: string
    sort?: string
    page?: string
  }
}) {
  const {
    q = 'all',
    category = 'all',
    price = 'all',
    rating = 'all',
    sort = 'newest',
    page = '1',
  } = searchParams

  // Ensure category follows `{ name: string; value: string }` structure
  const categories = (await getAllCategories()).map((c: { name: string }) => ({
    name: c.name,
    value: c.name,
  }))

  const products = await getAllProducts({
    category,
    query: q,
    price,
    rating,
    page: Number(page),
    sort,
  })

  const getFilterUrl = (params: Partial<typeof searchParams>) => {
    return `/search?${new URLSearchParams({ q, category, price, rating, sort, page, ...params }).toString()}`
  }

  return (
    <div className="grid md:grid-cols-5 gap-5">
      {/* Sidebar Filters */}
      <div>
        <div>
          <div className="text-xl pt-3">Category</div>
          <ul>
            <li>
              <Link
                href={getFilterUrl({ category: 'all' })}
                className={`${category === 'all' && 'text-primary'}`}
              >
                Any
              </Link>
            </li>
            {categories.map(({ name, value }) => (
              <li key={value}>
                <Link
                  href={getFilterUrl({ category: value })}
                  className={`${category === value && 'text-primary'}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xl pt-3">Price</div>
          <ul>
            <li>
              <Link
                href={getFilterUrl({ price: 'all' })}
                className={`${price === 'all' && 'text-primary'}`}
              >
                Any
              </Link>
            </li>
            {prices.map(({ name, value }) => (
              <li key={value}>
                <Link
                  href={getFilterUrl({ price: value })}
                  className={`${price === value && 'text-primary'}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xl pt-3">Customer Review</div>
          <ul>
            <li>
              <Link
                href={getFilterUrl({ rating: 'all' })}
                className={`${rating === 'all' && 'text-primary'}`}
              >
                Any
              </Link>
            </li>
            {ratings.map(({ name, value }) => (
              <li key={value}>
                <Link
                  href={getFilterUrl({ rating: value })}
                  className={`${rating === value && 'text-primary'}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Products Display Section */}
      <div className="md:col-span-4 space-y-4">
        {/* Search Filters Summary */}
        <div className="flex justify-between flex-col md:flex-row my-4">
          <div className="flex items-center space-x-2">
            {['q', 'category', 'price', 'rating'].map((key) => {
              const value = searchParams[key as keyof typeof searchParams]
              return value !== 'all' ? (
                <span
                  key={key}
                >{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}</span>
              ) : null
            })}
            {(q !== 'all' ||
              category !== 'all' ||
              price !== 'all' ||
              rating !== 'all') && (
              <Button variant="link" asChild>
                <Link href="/search">Clear</Link>
              </Button>
            )}
          </div>
          {/* Sort Options */}
          <div>
            Sort by{' '}
            {sortOrders.map((s) => (
              <Link
                key={s}
                className={`mx-2 ${sort === s && 'text-primary'}`}
                href={getFilterUrl({ sort: s })}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Product Grid - Ensure 6 Items Display */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-blue-50 gap-2 p-1">
          {products?.data.length === 0 ? (
            <div>No product found</div>
          ) : (
            products?.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        {/* Pagination */}
        {products?.totalPages > 1 && (
          <Pagination page={page} totalPages={products.totalPages} />
        )}
      </div>
    </div>
  )
}
