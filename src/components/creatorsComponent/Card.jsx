import React from "react";
import Coursecard from "../cards/Coursecard";

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

const Card = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-white text-black">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Coursecard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;