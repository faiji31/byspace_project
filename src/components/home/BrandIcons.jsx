import Image from "next/image";

const icons = [
  "/assets/Icon.png",
  "/assets/Icon1.png",
  "/assets/Icon2.png",
  "/assets/Icon3.png",
  "/assets/Icon4.png",
];

const BrandIcons=()=> {
  return (
    <section className="bg-white py-14">

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-12 px-6 md:justify-between">

        {icons.map((icon, index) => (
          <Image
            key={icon}
            src={icon}
            alt={`Partner ${index + 1}`}
            width={150}
            height={70}
            className="h-auto w-auto max-w-[130px] object-contain"
          />
        ))}

      </div>

    </section>
  );
}

export default BrandIcons