"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

// Helper function to format single digits with a leading zero
const formatTime = (value: number) => String(value).padStart(2, "0");

// --- Helper Component for Countdown Stat ---
const StatBox = ({ label, value }: { label: string; value: number }) => (
  // Updated design: Dark background, light text, minimal border
  <li className="flex flex-col p-3 border border-white/30 bg-black/10 transition-colors duration-300">
    <p className="text-3xl sm:text-4xl font-extrabold text-white leading-none">
      {formatTime(value)}
    </p>
    <p className="text-xs font-medium text-white/70 uppercase mt-1">{label}</p>
  </li>
);

// --- Main Component ---
const ProductPromotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Memoize the target date (3 days from now)
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  }, []);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = Math.max(
        targetDate.getTime() - currentTime.getTime(),
        0
      );

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      if (timeDifference === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval); // Cleanup the interval on unmount
    };
  }, [targetDate]);

  return (
    // FIX 1: Use flex-col on mobile for guaranteed stacking flow.
    // DESIGN: Dark background, better margin and padding.
    <section
      className="
        flex flex-col md:grid md:grid-cols-2 md:gap-12
        bg-lime-700 text-white 
        mx-auto mt-12 md:mt-20 
        p-6 sm:p-8 md:p-12 lg:p-16  
      "
    >
      {/* --- Image Column (Order 1 on Mobile, 2 on Desktop) --- */}
      {/* FIX 2: Explicit mobile height (h-60) and desktop height (h-full) */}
      <div className="flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0">
        <div className="relative w-full max-w-lg h-60 md:h-full">
          <Image
            alt="McVitie’s All Butter Shortbread, 200g"
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            src="/assets/images/MCVITIES CHOCOLATE SHORTBREAD 200G.webp"
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* --- Text and Timer Column (Order 2 on Mobile, 1 on Desktop) --- */}
      <div className="flex flex-col gap-4 justify-center order-2 md:order-1">
        <span className="text-sm font-semibold uppercase tracking-widest text-white">
          🔥 Flash Sale Ending Soon
        </span>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          McVitie’s All Butter Shortbread, 200g
        </h3>
        <p className="text-white/70 text-sm sm:text-base mt-2 mb-4">
          McVitie's All Butter Shortbread (200g) is a soft, melt-in-your-mouth
          cookie with a rich, creamy flavor. Grab this special offer before it
          expires!
        </p>

        {/* --- Countdown Timer --- */}
        <div className="mb-4">
          <h4 className="text-lg font-bold text-white mb-3">Time Left:</h4>
          <ul className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <StatBox label="Days" value={time.days} />
            <StatBox label="Hours" value={time.hours} />
            <StatBox label="Minutes" value={time.minutes} />
            <StatBox label="Seconds" value={time.seconds} />
          </ul>
        </div>

        {/* --- Button --- */}
        <div className="mt-4">
          <Button
            asChild
            className="
              bg-red-500 hover:bg-red-600 text-white font-bold 
              py-3 px-8 rounded-lg shadow-xl text-lg 
              transition-transform transform hover:scale-[1.02] w-full sm:w-auto
            "
          >
            <Link href="/search">Get the Deal Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductPromotion;
