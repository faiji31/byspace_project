import React from 'react'

const Coursecard = ({course}) => {
  return (

      <div className="group overflow-hidden rounded-[15px] border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

  
      <div className="relative mx-2  h-[145px] overflow-hidden rounded-[11px] ">

        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

       
        <div className="absolute bottom-3 left-2 right-2 flex items-center justify-between gap-1">

          <span className="rounded-full bg-white/80 px-2 py-1 text-[8px] font-medium text-gray-600 backdrop-blur-sm">
            {course.lessons}
          </span>

          <span className="rounded-full bg-white/80 px-2 py-1 text-[8px] font-medium text-gray-600 backdrop-blur-sm">
            {course.duration}
          </span>

          <span className="rounded-full bg-white/80 px-2 py-1 text-[8px] font-medium text-gray-600 backdrop-blur-sm">
            {course.comments}
          </span>

        </div>
      </div>


    
      <div className="px-3 pb-4 pt-3">

      
        <div className="flex items-start justify-between gap-2">

          <h2 className="line-clamp-1 text-[15px] font-bold leading-5 text-gray-900">
            {course.title}
          </h2>

          <div className="flex shrink-0 items-center gap-1 text-sm">
            <span className="text-gray-600">
              {course.rating}
            </span>

            <span className="text-gray-400">
              ★
            </span>
          </div>

        </div>


        
        <p className="mt-1 text-[10px] text-gray-500">
          by{" "}
          <span className="text-blue-500">
            {course.instructor}
          </span>
        </p>


      
        <div className="mt-3 flex items-center justify-between">

     
          <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1.5 text-[9px] text-gray-600">

            <span className="text-gray-500">
              ▮
            </span>

            <span>
              {course.level}
            </span>

          </div>


      
          <div className="flex items-center">

            {course.avatars.map((avatar, index) => (
              <img
                key={avatar}
                src={avatar}
                alt="Student"
                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                style={{
                  marginLeft:
                    index === 0 ? "0px" : "-8px",
                }}
              />
            ))}

          
            <div className="-ml-1 flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-white bg-lime-300 px-1.5 text-[9px] font-semibold text-gray-800">
              {course.moreStudents}+
            </div>

          </div>

        </div>


      
        <div className="mt-3 flex items-end gap-1">

          <span className="text-[14px] font-bold text-blue-600">
            {course.price}
          </span>

          <span className="mb-[1px] text-[9px] text-gray-400">
            /lifetime
          </span>

        </div>

      </div>

    </div>
    
  )
}

export default Coursecard
