'use server'
import { products } from '@/db/schema'
import db from '@/db/drizzle'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { formatError } from '../utils'

// DELETE
export async function deleteProduct(id: string) {
  try {
    const productExists = await db.query.products.findFirst({
      where: eq(products.id, id),
    })
    if (!productExists) throw new Error('Product not found')
    await db.delete(products).where(eq(products.id, id))
    revalidatePath('/admin/products')
    return {
      success: true,
      message: 'Product deleted successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}
