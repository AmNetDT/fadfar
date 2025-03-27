import { cn } from '@/lib/utils'
import { formatCurrency } from '@/lib/utils'

const ProductPrice = ({
  value,
  className,
}: {
  value: number
  className?: string
}) => {
  return (
    <p className={cn('text-xl text-nowrap', className)}>
      {formatCurrency(value)}
    </p>
  )
}

export default ProductPrice
