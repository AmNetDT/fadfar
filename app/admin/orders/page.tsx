import { auth } from '@/auth'
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
import { deleteOrder, getAllOrders } from '@/lib/actions/order.actions'
import { APP_NAME } from '@/lib/constants'
import { formatCurrency, formatDateTime, formatId } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Admin Orders - ${APP_NAME}`,
}
export default async function OrdersPage({
  searchParams: { page = '1' },
}: {
  searchParams: { page: string }
}) {
  const session = await auth()
  if (session?.user.role !== 'admin')
    throw new Error('admin permission required')
  const orders = await getAllOrders({
    page: Number(page),
  })
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold text-gray-300 my-4">Orders</h1>

      <div className="p-4 bg-white shadow-sm rounded-lg border border-gray-400 hover:bg-gray-200">
        <div className="overflow-x-auto">
          <Table className="w-full text-gray-800">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="text-black">ID</TableHead>
                <TableHead className="text-black">DATE</TableHead>
                <TableHead className="text-black">BUYER</TableHead>
                <TableHead className="text-black">TOTAL</TableHead>
                <TableHead className="text-black">PAID</TableHead>
                <TableHead className="text-black">DELIVERED</TableHead>
                <TableHead className="text-black w-[100px]">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.data.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{formatId(order.id)}</TableCell>
                  <TableCell>
                    {formatDateTime(order.createdAt).dateTime}
                  </TableCell>
                  <TableCell>
                    {order.user ? order.user.name : 'Deleted user'}
                  </TableCell>
                  <TableCell>{formatCurrency(order.totalPrice)}</TableCell>
                  <TableCell>
                    {order.isPaid && order.paidAt
                      ? formatDateTime(order.paidAt).dateTime
                      : 'not paid'}
                  </TableCell>
                  <TableCell>
                    {order.isDelivered && order.deliveredAt
                      ? formatDateTime(order.deliveredAt).dateTime
                      : 'not delivered'}
                  </TableCell>
                  <TableCell className="flex gap-1">
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href={`/order/${order.id}`}
                        className="hover:bg-gray-500"
                      >
                        Details
                      </Link>
                    </Button>
                    <DeleteDialog id={order.id} action={deleteOrder} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {orders.totalPages > 1 && (
            <Pagination page={page} totalPages={orders?.totalPages!} />
          )}
        </div>
      </div>
    </div>
  )
}
