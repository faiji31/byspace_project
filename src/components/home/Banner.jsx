import React from 'react'
import { Search } from "lucide-react";
import Image from 'next/image';

const Banner = () => {
  return (
    <div>
      <section
        className="relative min-h-screen min-w-screen overflow-hidden bg-[#0A38F5] text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-16 text-center">
          <h1 className="text-6xl font-semibold leading-tight ms:text-6xl">
            Get Access to Hundreds Courses Avilable
          </h1>
          <p className="mt-6 text-sm text-white/80">
            Unlock your creativity, gain valuable knowledge, and grow your business
            with our wide range of courses.
          </p>

          <form className="mt-10 flex items-center justify-center gap-3">
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                aria-label="Search courses"
                placeholder="Course, topic, creator"
                className="w-full rounded-full bg-white py-3 pl-12 pr-5 text-sm text-black placeholder:text-slate-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-lime-300"
            >
              <Search className="h-4 w-4" />
              Search
            </button>
          </form>
        </div>
          <div className="absolute -bottom-[45%] left-1/2 z-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-lime-400" />
          <Image
        src="/assets/person.png"
        alt="Student with laptop"
        width={520}
        height={520}
        priority
        className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2"
      />

       <div className="absolute bottom-52 left-[22%] z-20 rounded-xl bg-white px-4 py-3 text-black shadow-lg">
        <p className="text-sm font-medium">UI/UX Design</p>
        <p className="text-xs text-gray-400">200 Courses • 1000+ Students</p>
      </div>
      <div className="absolute bottom-56 right-[22%] z-20 w-44 rounded-xl bg-white p-4 text-black shadow-lg">
        <p className="text-xs">Learning Progress</p>
        <p className="text-3xl font-semibold">55%</p>
        <div className="mt-2 h-1.5 rounded-full bg-gray-200">
          <div className="h-full w-[55%] rounded-full bg-lime" />
        </div>
      </div>

      <div className="absolute bottom-16 left-[18%] z-20 rounded-xl bg-white p-4 text-black shadow-lg">
        <p className="text-sm font-medium">Happy Students</p>
        <p className="text-xs text-gray-500">4.5 (240) ★</p>
      </div>

       <Image  src="/assets/Frame.png" alt="" width={200} height={200}
        className="absolute left-0 top-28 hidden md:block" />
      <Image  src="/assets/mask.png" alt="" width={260} height={260}
        className="absolute bottom-10 left-90 hidden md:block" />
      <Image src="/assets/cone.png" alt="" width={200} height={200}
        className="absolute right-0 top-20 hidden md:block" />
  

      </section>
    </div>
  )
}

export default Banner
