import { ChartColumnDecreasing, GraduationCap, Play, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CourseHero = ({course}) => {
  return (
    <section className='text-white'>
        <div className='flex items-start justify-between gap-4'>
             <div>
                <h1 className='text-3xl font-bold leading-tight md:text-4xl'>{course.title}</h1>
                <p className='mt-2 text-sm text-white/90'>{course.subtitle}</p>
                <p className='mt-3 text-sm'>
                    by <span className='text-[#D9FF3D]'>{course.instructor.toLowerCase()}</span>
                </p>
             </div>
             
        </div>
        <div className='mt-4 flex flex-wrap gap-2 text-xs text-black'>
            <span className='rounded-full bg-white px-3 py-1.5'>
               <div className='flex items-center mt-2 gap-1'>
                 <ChartColumnDecreasing />
             {course.level}
               </div>
            </span>
            <span className='rounded-full bg-white px-3 py-1.5'>
             <div className='flex items-center mt-2 gap-1'>
                  <Star /> {course.rating} ({course.reviewsCount} reviews)
             </div>
            </span>
            <span className='rounded-full bg-white px-3 py-1.5'>
           <div className='flex items-center mt-2 gap-1'>
             <GraduationCap /> {course.students} Students
           </div>
            </span>

        </div>
        <div className='relative mt-6 overflow-hidden rounded-2xl'>
            <img src={course.image} alt={course.title} className="h-64 w-full object-cover md:h-80" />

                <button aria-label="Play preview"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white backdrop-blur hover:bg-black/80">

                 <Play />
                </button>
            

        </div>

    </section>
  )
}

export default CourseHero
