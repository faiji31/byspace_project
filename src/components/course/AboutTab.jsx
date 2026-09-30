import { Check } from 'lucide-react'
import React from 'react'

const AboutTab = ({course}) => {
  return (
    <div className='space-y-8'>
      <section>
        <h3 className='mb-3 text-lg font-semibold'>
            Description
        </h3>
        <div className='space-y-4 text-sm leading-relaxed text-gray-600'>
            {
                course.description.map((p,i)=>(
                    <p key={i}>{p}</p>
                ))
            }

        </div>
      </section>
      <section>
        <h3 className='mb-3 text-lg font-semibold'>
              Sneak Peek
        </h3>
       <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {course.sneakPeek.map((src) => (
           
            <img key={src} src={src} alt="Course preview" className="h-24 w-full rounded-lg object-cover" />
          ))}
        </div>

      </section>
      <section>
         <h3 className="mb-3 text-lg font-semibold">Key Points</h3>
        <ul className="space-y-3">
          {course.keyPoints.map((point) => (
            <li key={point} className="flex items-center gap-3 text-sm text-gray-700">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
               <Check />
              </span>
              {point}
            </li>
          ))}
        </ul>

      </section>

    </div>
  )
}

export default AboutTab
