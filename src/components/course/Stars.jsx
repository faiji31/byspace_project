import { Star } from 'lucide-react'
import React from 'react'

const Start = ({value=5,size = "text-base"}) => {
  return (
    <div className={`flex gap-0.5 ${size}`}>
        {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= Math.round(value) ? "text-black" : "text-gray-300"}>
          <Star></Star>
        </span>
      ))}


    </div>
  )
}

export default Start
