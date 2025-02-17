'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

const ProductPromotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Memoize the target date so it doesn't change on every render
  const targetDate = useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + 3)
    return date
  }, [])

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(
        targetDate.getTime() - currentTime.getTime(),
        0
      )

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      )
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })

      if (timeDifference === 0) {
        clearInterval(timerInterval)
        // Optional: Add code to handle the event when the countdown ends
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval) // Cleanup the interval on unmount
    }
  }, [targetDate])

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
      <div className="flex flex-col gap-4 justify-center">
        <h3 className="text-2xl font-bold">Human Made</h3>
        <p className="text-gray-700">
          Founded by NIGO of BAPE, Human Made came to fruition in 2010 in
          collaboration with designer Sk8thing. Inspired by vintage clothing,
          Human Made bridges the gap between Japanese fashion and Americana
          workwear. NIGO wanted to start a brand that contrasted with his
          trendsetting streetwear brand BAPE. Each product from Human Made is
          made in Japan and includes apparel such as t-shirts, hoodies, varsity
          jackets, and more. In addition to clothing, Human Made also introduces
          an array of accessories and homeware such as beanies, rugs, mugs,
          wallets, and much more.
        </p>
        <ul className="grid grid-cols-4 gap-4 text-center">
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
        <div className="mt-4 text-center">
          <Button asChild>
            <Link href="/search">View products</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          alt="Promotion image of Human Made products"
          width={400}
          height={300}
          src="/assets/images/p1-1.jpeg"
        />
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className="p-4 bg-gray-100">
    <p className="text-3xl font-bold">{value}</p>
    <p className="text-gray-600">{label}</p>
  </li>
)

export default ProductPromotion
