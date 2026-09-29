import React from 'react'
import Coursecard from '../cards/Coursecard';
import {
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";


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
const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    rating: "4.5",
    instructor: "purepearl studio",
    level: "Beginner",
    price: "$25",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    moreStudents: 26,
    avatars: [
      "https://i.pravatar.cc/100?img=12",
      "https://i.pravatar.cc/100?img=32",
      "https://i.pravatar.cc/100?img=47",
      "https://i.pravatar.cc/100?img=56",
    ],
  },

  {
    id: 2,
    title: "Build Digital Asset",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    rating: "4.5",
    instructor: "purepearl studio",
    level: "Beginner",
    price: "$25",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    moreStudents: 26,
    avatars: [
      "https://i.pravatar.cc/100?img=15",
      "https://i.pravatar.cc/100?img=22",
      "https://i.pravatar.cc/100?img=35",
      "https://i.pravatar.cc/100?img=42",
    ],
  },

  {
    id: 3,
    title: "The Power of Big Data",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    rating: "4.5",
    instructor: "purepearl studio",
    level: "Beginner",
    price: "$25",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    moreStudents: 26,
    avatars: [
      "https://i.pravatar.cc/100?img=11",
      "https://i.pravatar.cc/100?img=29",
      "https://i.pravatar.cc/100?img=41",
      "https://i.pravatar.cc/100?img=51",
    ],
  },

  {
    id: 4,
    title: "Balancing Productivity and Life",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    rating: "4.5",
    instructor: "purepearl studio",
    level: "Beginner",
    price: "$25",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    moreStudents: 26,
    avatars: [
      "https://i.pravatar.cc/100?img=13",
      "https://i.pravatar.cc/100?img=24",
      "https://i.pravatar.cc/100?img=37",
      "https://i.pravatar.cc/100?img=48",
    ],
  },

  {
    id: 5,
    title: "Mastering Money Management",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80",
    rating: "4.5",
    instructor: "purepearl studio",
    level: "Beginner",
    price: "$25",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    moreStudents: 26,
    avatars: [
      "https://i.pravatar.cc/100?img=16",
      "https://i.pravatar.cc/100?img=31",
      "https://i.pravatar.cc/100?img=44",
      "https://i.pravatar.cc/100?img=57",
    ],
  },

  {
    id: 6,
    title: "From Idea to Startup Success",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    rating: "4.5",
    instructor: "purepearl studio",
    level: "Beginner",
    price: "$25",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    moreStudents: 26,
    avatars: [
      "https://i.pravatar.cc/100?img=18",
      "https://i.pravatar.cc/100?img=26",
      "https://i.pravatar.cc/100?img=39",
      "https://i.pravatar.cc/100?img=52",
    ],
  },
];

const iconMap = {
  Design: PenTool,
  Development: Code2,
  "IT & Software": Laptop,
  Business: Building2,
  Marketing: Megaphone,
  Photography: Camera,
};

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
        <div className="mx-auto max-w-[1200px]">

        

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">

          {courses.map((course) => (
            <Coursecard
              key={course.id}
              course={course}
            />
          ))}

        </div>

      </div>
      <div>
        <h1  className='text-3xl text-center mt-12  font-bold'>Explore Diverse Learning Paths at Bytespace</h1>
        <p className='text-[13px] text-center mt-3 text-gray-400'>At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.</p>
      </div>
         
   
      
       

      </section>
    </div>

  )
}

export default Discover
