// components/CartCheckout.tsx
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { memo } from 'react'

interface CartCheckoutProps {
  cart: any // Replace with your actual cart type
  isPending: boolean
}

const CartCheckoutComponent = ({ cart, isPending }: CartCheckoutProps) => {
  if (!cart || cart.items.length === 0) return null

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-center">
          <Link href="/shipping-address">
            <Button disabled={isPending} className="p-8">
              {isPending ? (
                <Loader className="animate-spin w-4 h-4" />
              ) : // Removed ArrowRight component
              null}
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

// Wrap the component with memo and set the displayName
const CartCheckout = memo(CartCheckoutComponent)

CartCheckout.displayName = 'CartCheckout'

export default CartCheckout
