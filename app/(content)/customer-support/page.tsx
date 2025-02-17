import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Personal Journey of Faith',
  description:
    'For Sophia, the founder of ChooseLifeandPeace, this brand is deeply personal.',
}

const CustomerSupport = () => {
  return (
    <>
      <div className="my-16 sm:my-28 grid grid-cols-1 sm:grid-cols-6 gap-4 px-4 sm:px-28">
        <div className="col-start-1 col-end-7">
          <h1 className="text-2xl sm:text-4xl text-center pb-6 sm:pb-10">
            Customer Support
          </h1>
          <p className="text-base text-center sm:text-lg tracking-widest leading-normal pt-6">
            At ChooseLifeandPeace, we prioritize providing exceptional customer
            service. If you have any questions, concerns, or need assistance
            with your order, our support team is here to help.
          </p>
        </div>
      </div>

      <div className="py-16 sm:py-24 grid gap-8 sm:gap-4 grid-cols-1 sm:grid-cols-3">
        <div className="p-6 sm:p-8 border-y-4 sm:border-y-0 sm:border-l-4 border-zinc-700 sm:col-span-2 sm:mr-8">
          <h1 className="text-2xl sm:text-4xl text-center pb-6 sm:pb-10">
            How to Contact Us
          </h1>
          <ul className="list-decimal pl-5">
            <li>Email: support@chooselifeandpeace.com</li>
            <li>
              Phone: Insert Phone Number (Available: [e.g., Monday to Friday, 9
              AM – 5 PM EST])
            </li>
            <li>
              Live Chat: Visit our website and click on the Chat with Us button
              for real-time assistance.
            </li>
            <li>
              Contact Form: Fill out the form on our Contact Us page, and we’ll
              get back to you within 24-48 hours.
            </li>
          </ul>
          <p className="text-base text-center sm:text-lg tracking-widest leading-normal pt-6">
            We’re committed to ensuring a smooth and enjoyable shopping
            experience. Don’t hesitate to reach out!
          </p>
        </div>
        <div className="p-6 sm:p-8 border-x-0 sm:border-l-4 sm:border-x-4 border-zinc-700">
          <h1 className="text-2xl sm:text-4xl text-center pb-6 sm:pb-10">
            Common Customer Support Topics
          </h1>
          <ul className="list-decimal pl-5">
            <li>
              Returns & Refunds: For help with returns, exchanges, or refund
              requests, refer to our Return Policy or contact our support team.
            </li>
            <li>
              Product Information: Have questions about a specific product? Let
              us know, and we’ll provide detailed information.
            </li>
            <li>
              Account Assistance: Need help with logging in, updating your
              account information, or resetting your password? We’re here to
              assist.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default CustomerSupport
