"use client";

import {
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

const categories = [
  {
    name: "Design",
    icon: PenTool,
  },
  {
    name: "Development",
    icon: Code2,
  },
  {
    name: "IT & Software",
    icon: Laptop,
  },
  {
    name: "Business",
    icon: Building2,
  },
  {
    name: "Marketing",
    icon: Megaphone,
  },
  {
    name: "Photography",
    icon: Camera,
  },
];

const CategoryCards=()=> {
  return (
    <section className="bg-white py-16">

      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-5 px-6">

        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              className="flex h-[120px] w-[145px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#C8FF00] hover:shadow-lg"
            >

              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#C8FF00]">
                <Icon
                  size={21}
                  strokeWidth={2.5}
                />
              </div>

              <span className="text-sm font-medium text-gray-800">
                {category.name}
              </span>

            </button>
          );
        })}

      </div>
    </section>
  );
}
export default CategoryCards