import DeleteDialog from '@/components/shared/delete-dialog'
import Pagination from '@/components/shared/pagination'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getAllProducts } from '@/lib/actions/product.actions'
import { deleteProduct } from '@/lib/actions/product.delete'
import { APP_NAME } from '@/lib/constants'
import { formatCurrency, formatId } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: `Admin Products - ${APP_NAME}`,
}
// app/admin/products/page.tsx
export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams: {
    page: string
    query: string
    category: string
  }
}) {
  const page = Number(searchParams.page) || 1
  const searchText = searchParams.query || ''
  const category = searchParams.category || ''
  const products = await getAllProducts({
    query: searchText,
    category,
    page,
  })

  return (
    <div className="space-y-2">
      <div className="flex-between">
        <h1 className="text-2xl font-semibold text-gray-300 my-4">Products</h1>
        <Button
          asChild
          variant="default"
          className=" rounded-2xl border border-gray-400 hover:bg-gray-400"
        >
          <Link href="/admin/products/create">Create Product</Link>
        </Button>
      </div>
      <div className="p-4 bg-white shadow-sm rounded-lg border border-gray-400 hover:bg-gray-200">
        <div className="overflow-x-auto">
          <Table className="w-full text-gray-800">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="text-black">ID</TableHead>
                <TableHead className="text-black">NAME</TableHead>
                <TableHead className="text-black text-right">PRICE</TableHead>
                <TableHead className="text-black">CATEGORY</TableHead>
                <TableHead className="text-black">STOCK</TableHead>
                <TableHead className="text-black">RATING</TableHead>
                <TableHead className="text-black w-[100px]">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.data.map((product) => (
                <TableRow key={product.id} className="hover:bg-gray-50">
                  <TableCell>{formatId(product.id)}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(product.price)}
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.rating}</TableCell>
                  <TableCell className="flex gap-1">
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href={`/admin/products/${product.id}`}
                        className="hover:bg-gray-500"
                      >
                        Edit
                      </Link>
                    </Button>
                    <DeleteDialog id={product.id} action={deleteProduct} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {products?.totalPages! > 1 && (
          <div className="mt-4">
            <Pagination page={page} totalPages={products?.totalPages!} />
          </div>
        )}
      </div>
    </div>
  )
}
