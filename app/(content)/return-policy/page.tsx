import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Return Policy for ChooseLifeandPeace Online Shop',
  description:
    'At Choose Life and Peace, we are committed to ensuring your satisfaction with every purchase.',
}

const ReturnPolicy = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 my-16 md:my-28 px-4 md:px-28">
        <div className="col-span-6">
          <h1 className="text-2xl md:text-4xl text-center pb-6 md:pb-10">
            Return Policy for ChooseLifeandPeace Online Shop
          </h1>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            At Choose Life and Peace, we are committed to ensuring your
            satisfaction with every purchase. If you are not completely
            satisfied with your order, we gladly accept returns under the
            following conditions:
          </p>
          <ol className="list-decimal pl-4 md:pl-20 py-4">
            <li>
              <strong>Eligibility:</strong> You may return your item within 7
              days of receiving your order for a full refund or exchange.
            </li>
            <li>
              <strong>Return Condition:</strong> Items must be returned in their
              original condition—unused, unwashed, and with all original
              packaging and tags intact.
            </li>
            <li>
              <strong>Process:</strong> To initiate a return, please contact our
              customer service team at (contact email/phone number). They will
              provide you with detailed instructions on how to proceed.
            </li>
            <li>
              <strong>Refunds:</strong> Once your return is received and
              inspected, we will process your refund within 5-7 business days.
              Refunds will be applied to your original payment method.
            </li>
            <li>
              <strong>Exchanges:</strong> If you wish to exchange an item,
              please specify the item and size/color you prefer, and we will
              arrange the exchange based on availability.
            </li>
            <li>
              <strong>Shipping Fees:</strong> Return shipping costs are the
              responsibility of the customer unless the return is due to an
              error on our part or a defective item.
            </li>
            <li>
              <strong>Non-Returnable Items:</strong> Certain items, such as
              final sale items, gift cards, and personalized products, may not
              be eligible for return or exchange. Please review our full policy
              on non-returnable items for details.
            </li>
          </ol>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            If you have any questions about our return policy or need further
            assistance, our team at ChooseLifeandPeace is here to help! Email us
            at support@chooselifeandpeace.com
          </p>
        </div>
      </div>
    </>
  )
}

export default ReturnPolicy
