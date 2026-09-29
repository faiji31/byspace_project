import Image from "next/image";
import React from "react";

const icons = [
  { src: "/assets/Icon.png", alt: "Brand icon 1" },
  { src: "/assets/Icon1.png", alt: "Brand icon 2" },
  { src: "/assets/Icon2.png", alt: "Brand icon 3" },
  { src: "/assets/Icon3.png", alt: "Brand icon 4" },
  { src: "/assets/Icon4.png", alt: "Brand icon 5" },
];

const Icon = () => {
  return (
    <section className=" min-w-screen bg-gray-300">
      <div className="mx-auto flex min-h-[200px] max-w-full items-center justify-center px-8">
        
        <div className="flex w-full items-center justify-between gap-8">
          {icons.map((icon) => (
            <div
              key={icon.src}
              className="flex flex-1 items-center justify-center"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={150}
                height={70}
                className="h-auto w-auto max-w-[150px] object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Icon;