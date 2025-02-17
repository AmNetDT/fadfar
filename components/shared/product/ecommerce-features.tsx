import { Card, CardContent } from '@/components/ui/card'
import { DollarSign, Headset, ShoppingBag, WalletCards } from 'lucide-react'

const EcommerceFeatures = () => {
  return (
    <div className="">
      <Card>
        <CardContent className="grid gap-4 md:grid-cols-4 p-4 ">
          <div className="space-y-2">
            <ShoppingBag />
            <div className="text-[17px] sm:text-[17px] md:text-[17px] lg:text-[17px] leading-[1.5] font-bold">
              Free Shipping
            </div>
            <div className="text-[17px] sm:text-[17px] md:text-[17px] lg:text-[17px] leading-[1.5] text-gray-700 ">
              Free shipping for order above $100
            </div>
          </div>
          <div className="space-y-2">
            <DollarSign />
            <div className="text-[17px] sm:text-[17px] md:text-[17px] lg:text-[17px] leading-[1.5] font-bold">
              Money Guarantee
            </div>
            <div className="text-[17px] sm:text-[17px] md:text-[17px] lg:text-[17px] leading-[1.5] text-gray-700 ">
              Within 30 days for an exchange
            </div>
          </div>
          <div className="space-y-2">
            <WalletCards />
            <div className="text-[17px] sm:text-[17px] md:text-[17px] lg:text-[17px] leading-[1.5] font-bold">
              Flexible Payment
            </div>
            <div className="text-[17px] sm:text-[17px] md:text-[17px] lg:text-[17px] leading-[1.5] text-gray-700 ">
              Pay with multiple credit cards
            </div>
          </div>
          <div className="space-y-2">
            <Headset />
            <div className="text-[17px] sm:text-[17px] md:text-[17px] lg:text-[17px] leading-[1.5] font-bold">
              724 Support
            </div>
            <div className="text-[17px] sm:text-[17px] md:text-[17px] lg:text-[17px] leading-[1.5] text-gray-700 ">
              support customers
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default EcommerceFeatures
