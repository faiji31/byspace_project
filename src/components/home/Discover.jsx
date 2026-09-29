import React from 'react'

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];


const Discover = () => {
  return (
    <div  className=" min-h-screen min-w-screen overflow-hidden bg-white text-black">
      <h1 className='text-4xl text-center mt-12 font-bold'>Discover Your Passion, <br /> Build Your Skills</h1>
      <p className='text-[13px] text-center mt-3 text-gray-400'>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different <br /> fields, from technology to the arts, and make a difference in your career and life.</p>

       <section className="mx-auto max-w-4xl px-4 py-5">

        <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">

          {categories.map((category, index) => (
            <button
              key={category}
              className={`
                whitespace-nowrap
                rounded-full
                px-4
                py-2
                text-[12px]
                font-medium
                transition
                ${
                  index === 0
                    ? "bg-[#c8ff00] text-gray-900"
                    : "bg-[#f5f5f5] text-gray-600 hover:bg-[#eeeeee]"
                }
              `}
            >
              {category}
            </button>
          ))}

          <button
            className="
              whitespace-nowrap
              px-1
              py-2
              text-[12px]
              font-medium
              text-blue-600
              hover:text-blue-700
            "
          >
            + More
          </button>

        </div>

      </section>
    </div>

  )
}

export default Discover
