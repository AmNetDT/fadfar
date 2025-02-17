import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Return Policy for ChooseLifeandPeace Online Shop',
  description:
    'At Choose Life and Peace, we are committed to ensuring your satisfaction with every purchase.',
}

const Faq = () => {
  return (
    <>
      <div className="flex justify-center items-center my-16 sm:my-28 px-4">
        <div className="w-full max-w-5xl">
          <h1 className="text-2xl sm:text-4xl text-center pb-6 sm:pb-10">
            Frequently Asked Questions (FAQ)
          </h1>
          <h1 className="text-xl sm:text-3xl text-center py-2 sm:py-6">
            Welcome to the ChooseLifeandPeace FAQ page! Below are answers to
            some of the most common questions.
          </h1>
          <p className="text-base sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
            If you can’t find what you’re looking for, feel free to contact us.
          </p>

          <div className="grid grid-cols-6 gap-4 my-12 border border-indigo-600 ... py-10 px-4">
            <div className="col-start-1 col-end-7 ... text-center">
              <h1 className="text-xl sm:text-3xl text-center py-2 sm:py-6">
                1. How do I place an order?
              </h1>
              <p className="text-base sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
                You can place an order by browsing our products, adding items to
                your cart, and completing the checkout process. We accept [list
                payment methods].
              </p>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 my-12 border border-indigo-600 ... py-10 px-4">
            <div className="col-start-1 col-end-7 ... text-center">
              <h1 className="text-xl sm:text-3xl text-center py-2 sm:py-6">
                2. What payment methods do you accept?
              </h1>
              <p className="text-base sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
                We accept a variety of payment options, including:
              </p>
              <li>Credit/Debit Cards (Visa, MasterCard, etc.)</li>
              <li>PayPal</li>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 my-12 border border-indigo-600 ... py-10 px-4">
            <div className="col-start-1 col-end-7 ... text-center">
              <h1 className="text-xl sm:text-3xl text-center py-2 sm:py-6">
                3. Can I track my order?
              </h1>
              <p className="text-base sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
                Yes, once your order is shipped, you&apos;ll receive a tracking
                number via email.
              </p>
              <p className="text-base sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
                Use this number to track your package on our (tracking page or
                courier&apos;s website).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 my-12 border border-indigo-600 ... py-10 px-4">
            <div className="col-start-1 col-end-7 ... text-center">
              <h1 className="text-xl sm:text-3xl text-center py-2 sm:py-6">
                4. What is your return policy?
              </h1>
              <p className="text-base sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
                We offer a 7-day return policy for unused and unopened items.
                For more details, please visit our Return Policy page.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 my-12 border border-indigo-600 ... py-10 px-4">
            <div className="col-start-1 col-end-7 ... text-center">
              <h1 className="text-xl sm:text-3xl text-center py-2 sm:py-6">
                5. How do I return or exchange an item?
              </h1>
              <p className="text-sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
                To initiate a return or exchange, please contact our customer
                support team at
              </p>
              <li>support@chooselifeandpeace.com</li>
              <p> with your order number and reason for the return.</p>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 my-12 border border-indigo-600 ... py-10 px-4">
            <div className="col-start-1 col-end-7 ... text-center">
              <h1 className="text-xl sm:text-3xl text-center py-2 sm:py-6">
                6. How long does shipping take?
              </h1>
              <p className="text-base sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
                Shipping times vary based on your location: Domestic Orders:
                <li>Insert time frame, e.g., 3-5 business days] </li>
                <li>
                  International Orders: [Insert time frame, e.g., 7-14 business
                  days]
                </li>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 my-12 border border-indigo-600 ... py-10 px-4">
            <div className="col-start-1 col-end-7 ...">
              <h1 className="text-xl sm:text-3xl text-center py-2 sm:py-6">
                7. Do you offer international shipping?
              </h1>
              <p className="text-base sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
                Yes, we ship to [list countries/regions]. Please note that
                delivery times and shipping costs may vary depending on the
                destination.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 my-12 border border-indigo-600 ... py-10 px-4">
            <div className="col-start-1 col-end-7 ...">
              <h1 className="text-xl sm:text-3xl text-center py-2 sm:py-6">
                8. What should I do if I receive a damaged or defective item?
              </h1>
              <p className="text-base sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
                If your item arrives damaged or defective, please contact us
                immediately at{' '}
              </p>
              <li className="text-center">support@chooselifeandpeace.com</li>
              <p></p>
              <p className="text-base sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
                Include photos of the damaged item, and we’ll resolve the issue
                promptly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 my-12 border border-indigo-600 ... py-10 px-4">
            <div className="col-start-1 col-end-7 ...">
              <h1 className="text-xl sm:text-3xl text-center py-2 sm:py-6">
                9. Can I change or cancel my order?
              </h1>
              <p className="text-base sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
                If you need to change or cancel your order, contact us as soon
                as possible. Once an order has been processed or shipped,
                changes or cancellations may not be possible.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 my-12 border border-indigo-600 ... py-10 px-4">
            <div className="col-start-1 col-end-7 ... text-center">
              <h1 className="text-xl sm:text-3xl text-center py-2 sm:py-6">
                10. How can I contact customer support?
              </h1>
              <p className="text-base sm:text-lg font-bold tracking-widest leading-normal text-center pt-6">
                You can reach our customer support team via:
              </p>
              <li>Email: support@chooselifeandpeace.com</li>
              <li>Phone: +14018303238</li>
              <li>
                Live Chat: Available on our website during business hours.
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
