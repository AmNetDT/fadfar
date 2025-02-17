import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Personal Journey of Faith',
  description:
    'For Sophia, the founder of ChooseLifeandPeace, this brand is deeply personal.',
}

const PersonalFaith = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 my-16 md:my-28 px-4 md:px-28">
        <div className="col-span-6 md:col-start-1 md:col-end-7">
          <h1 className="text-2xl md:text-4xl text-center pb-6 md:pb-10">
            A Personal Journey of Faith
          </h1>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            For Sophia, the founder of ChooseLifeandPeace, this brand is deeply
            personal. It is the result of her own spiritual journey—a journey
            marked by faith, healing, and a desire to serve God.
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            Through her personal experiences, Sophia realized the importance of
            creating a platform that not only inspires but also saves lives by
            offering people the truth of the gospel.
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            This realization is what drives her to create designs that speak
            directly to the heart, offering a message of hope and encouragement
            to those who wear them. Sophia’s story is a testament to the power
            of God’s love.{' '}
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            In founding ChooseLifeandPeace, she hopes to share that same love
            with others, reminding them that God has a purpose for every life,
            and that through faith in Jesus Christ, we can all experience true
            peace and joy.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-16 md:py-24">
        <div className="col-span-3 md:col-span-2 mr-0 md:mr-8 p-4 md:p-8 border-l-0 md:border-l-zinc-700 border-t-4 md:border-y-4">
          <h1 className="text-2xl md:text-4xl text-left pb-6 md:pb-10">
            Our Core Values
          </h1>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            At ChooseLifeandPeace, we hold several core values at the heart of
            everything we do. These values guide our mission and shape the way
            we create, communicate, and serve our community:
          </p>
          <ol className="list-decimal pl-4 md:pl-8">
            <li>
              Faith – Our foundation is built on the belief that Jesus Christ is
              the source of life, hope, and peace. Our apparel serves as a
              reflection of this faith, designed to inspire and uplift.
            </li>
            <li>
              Love – We believe in the transformative power of God’s love, and
              we are committed to sharing that love with the world through our
              designs and messaging.
            </li>
            <li>
              Community – ChooseLifeandPeace is more than just a brand; it’s a
              community of believers who are passionate about spreading the
              gospel and supporting one another on their spiritual journeys
            </li>
            <li>
              Purpose – We create with purpose, knowing that each design has the
              potential to impact someone’s life, offering them hope,
              encouragement, and a reminder of God’s presence.
            </li>
          </ol>
        </div>
        <div className="p-4 md:p-8 border-l-0 md:border-l-zinc-700 border-x-0 md:border-x-4">
          <h1 className="text-2xl md:text-4xl text-left pb-6 md:pb-10">
            A Call to Action
          </h1>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            We invite you to join us on this journey of faith. At
            ChooseLifeandPeace, we are committed to living out our faith and
            sharing the love of Christ with the world through our unique
            designs.
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            Our apparel is more than just fashion—it is a tool for spreading the
            gospel, starting conversations, and impacting lives. Together, we
            can create a movement that reaches souls, transforms hearts, and
            brings people closer to God.
          </p>
          <h1 className="text-2xl md:text-4xl text-left py-6 md:py-10">
            Our motto
          </h1>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            God Himself is Our Anchor, Wherever We May Go, Now and Forever More,
            encapsulates the essence of our mission.{' '}
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            We trust in the Lord`&apos;`s guidance in all we do, and we believe
            that with Him as our anchor, we can face any storm and emerge
            victorious.`&quot;`
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="col-span-6">
          <h1 className="text-2xl md:text-4xl text-left py-6 md:py-10">
            Join Us
          </h1>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            Whether you are wearing one of our T-shirts, hoodies, or
            accessories, you are not just representing a brand—you are part of a
            larger mission to spread love, hope, and the gospel of Jesus Christ.
          </p>
          <p className="text-base sm:text-lg tracking-widest leading-normal pt-6">
            Every purchase you make supports our mission to save lives and bring
            people closer to God. Together, we can choose life and peace, and we
            can make a difference in the world by shining the light of Christ
            wherever we go.
          </p>
        </div>
      </div>
    </>
  )
}

export default PersonalFaith
