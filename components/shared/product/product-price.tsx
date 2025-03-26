import { cn } from '@/lib/utils'

const ProductPrice = ({
  value,
  className,
}: {
  value: number
  className?: string
}) => {
  const stringValue = value.toString()
  const [intValue, floatValue] = stringValue.includes('.')
    ? stringValue.split('.')
    : [stringValue, '']

  const formattedIntValue = Number(intValue).toLocaleString() // Add commas

  return (
    <p className={cn('text-xl text-nowrap', className)}>
      {/* Naira Sign in HTML */}
      &#8358; {formattedIntValue}
      {floatValue ? `.${floatValue}` : ''}
    </p>
  )
}

export default ProductPrice
