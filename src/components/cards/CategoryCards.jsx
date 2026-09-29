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
    <section className="w-full overflow-hidden bg-[#f5f5f3] py-8 text-black">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 px-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.name}
              className="flex h-[112px] w-[140px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-gray-200 bg-wghite transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
        
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-lime-400">
                <Icon size={21} strokeWidth={2.5} />
              </div>

          
              <p className="text-sm font-medium text-gray-800">
                {category.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryCards