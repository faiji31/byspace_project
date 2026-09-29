import React from 'react'
import { Search } from "lucide-react";

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
      </section>
    </div>
  )
}

export default Banner
