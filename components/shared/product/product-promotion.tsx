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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-300 mt-20 px-20 border-t-2">
      <div className="flex flex-col gap-4 justify-center">
        <h3 className="text-2xl font-bold">
          McVitie’s All Butter Shortbread, 200g
        </h3>
        <p className="text-gray-700">
          McVitie's All Butter Shortbread (200g) is a soft, melt-in-your-mouth
          cookie with a rich, creamy flavor. It features a delightful blend of
          mixed cereals, fruit, nuts, and chocolate, all perfectly combined for
          a satisfying treat.
        </p>
        <ul className="grid grid-cols-4 gap-4 text-center">
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
        <div className="mt-4 text-center">
          <Button asChild className="bg-slate-500">
            <Link href="/search">View Products</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center p-10">
        <Image
          alt="McVitie’s All Butter Shortbread, 200g"
          width={700}
          height={400}
          src="/assets/images/MCVITIES CHOCOLATE SHORTBREAD 200G.webp"
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
