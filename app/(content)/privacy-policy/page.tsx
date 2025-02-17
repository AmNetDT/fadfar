import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Return Policy for ChooseLifeandPeace Online Shop',
  description:
    'At Choose Life and Peace, we are committed to ensuring your satisfaction with every purchase.',
}

const PrivacyPolicy = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 my-16 md:my-28 px-4 md:px-28">
        <div className="col-span-6">
          <h1 className="text-2xl md:text-4xl text-center pb-6 md:pb-10">
            Privacy Policy for ChooseLifeandPeace
          </h1>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            At ChooseLifeandPeace, your privacy is important to us. This Privacy
            Policy explains how we collect, use, and protect your personal
            information when you use our website.
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            1. Information We Collect
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            1.1. Personal Information
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and shipping addresses</li>
              <li>
                Payment information (processed securely and not stored on our
                servers)
              </li>
            </ul>
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            1.2. Non-Personal Information
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages viewed and interactions on our website</li>
          </ul>

          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            2. How We Use Your Information
          </p>
          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left py-2">
            We use the information we collect to:
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            2.1. Process and fulfill your orders
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            2.2. Communicate with you regarding your orders or inquiries
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            2.3. Improve our website and user experience
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            2.4. Send promotional emails (with your consent)
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            2.5. Prevent fraud and maintain security
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            3. Sharing Your Information
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            We respect your privacy and will not sell or share your personal
            information with third parties, except as necessary to:
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            3.1. Process payments (e.g., payment processors)
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            3.2. Fulfill orders (e.g., shipping companies)
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            3.3. Comply with legal obligations or respond to lawful requests 4.
            Cookies and Tracking Technologies
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            4.1. Cookies: We use cookies to enhance your browsing experience,
            remember your preferences, and analyze website traffic.
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            4.2. Third-Party Analytics: We may use services like Google
            Analytics to gather data on website usage. You can disable cookies
            through your browser settings, but this may affect the functionality
            of our website.
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            5. Data Security We implement appropriate technical and
            organizational measures to protect your personal information from
            unauthorized access, alteration, or disclosure.{' '}
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            6. Your Rights You have the right to:{' '}
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            6.1. Access, update, or delete your personal information.
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            6.2. Opt-out of receiving promotional communications.
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            6.3. Request a copy of the personal data we hold about you. To
            exercise your rights, please contact us at
            support@chooselifeandpeace.com.
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            7. Third-Party Links Our website may contain links to third-party
            websites. We are not responsible for the privacy practices or
            content of these sites. Please review their privacy policies before
            sharing your information.
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            8. Changes to This Privacy Policy We may update this Privacy Policy
            from time to time. Changes will be posted on this page with the
            updated effective date.
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            9. Contact Us If you have any questions or concerns about our
            Privacy Policy or how we handle your information, please contact us:
            Email: support@chooselifeandpeace.com Phone: +14018303238
          </p>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
