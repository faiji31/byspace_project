import React from 'react'
import { courses } from "@/data/courses";
import { ChevronDown, Search } from "lucide-react";

const FindCourse = () => {
  return (
    <div>
      <div className="mx-auto w-full bg-[#0A38F5] px-5 pb-16">
    <div
      className="pointer-events-none absolute inset-0 z-0 opacity-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
    
  <div className="flex flex-col items-center text-center">

    <h1 className="mt-20 text-4xl font-bold text-white">
      Find Your Next Courses
    </h1>

    <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col items-center gap-3 sm:flex-row">

    
      <div className="relative w-full flex-1">
        <Search
          size={19}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search"
          className="
            h-12
            w-full
            rounded-full
            border-none
            bg-white
            pl-12
            pr-5
            text-sm
            text-gray-900
            outline-none
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-[#C8FF00]
          "
        />
      </div>

      
      <button
        type="button"
        className="
          flex
          h-12
          shrink-0
          items-center
          justify-center
          gap-2
          rounded-full
          bg-[#C8FF00]
          px-8
          text-sm
          font-semibold
          text-gray-900
          transition
          hover:bg-[#d9ff4d]
        "
      >
        
        Courses
        <ChevronDown size={17}  /> 
      </button>

    </div>

  </div>
</div>
    </div>
  )
}

export default FindCourse
