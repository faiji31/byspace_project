import Image from "next/image";
import { Search, Star } from "lucide-react";

const Banner=()=> {
  return (
    <section className="relative min-h-[950px] overflow-hidden bg-[#0A38F5] text-white">

  
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

   
      <div className="relative z-20 mx-auto max-w-4xl px-5 pt-16 text-center">

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/80">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

   
        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">

          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Course, topic, creator"
              className="h-12 w-full rounded-full bg-white pl-11 pr-5 text-sm text-gray-900 outline-none"
            />
          </div>

          <button className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#C8FF00] px-7 text-sm font-semibold text-gray-900 transition hover:bg-[#d9ff4d]">
            <Search size={17} />
            Search
          </button>

        </div>
      </div>


      <div className="absolute -bottom-[430px] left-1/2 h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-[#C8FF00]" />


      <Image
        src="/assets/Person.png"
        alt="Student with laptop"
        width={820}
        height={700}
        priority
        className="absolute bottom-0 left-1/2 z-10 w-[650px] max-w-none -translate-x-1/2"
      />


      <div className="absolute bottom-60 left-[28%] z-30 hidden rounded-xl bg-white px-5 py-4 text-gray-900 shadow-xl lg:block">
        <p className="text-sm font-semibold">
          UI/UX Design
        </p>

        <p className="mt-1 text-xs text-gray-400">
          200 Courses • 1000+ Students
        </p>
      </div>

      <div className="absolute bottom-57 right-[38%] z-30 hidden w-44 rounded-xl bg-white p-5 text-gray-900 shadow-xl lg:block">

        <p className="text-xs font-semibold">
          Learning Progress
        </p>

        <p className="mt-1 text-3xl font-bold">
          55%
        </p>

        <div className="mt-2 h-1.5 rounded-full bg-gray-200">
          <div className="h-full w-[55%] rounded-full bg-[#C8FF00]" />
        </div>

      </div>
       
          
             <div  className="absolute bottom-9 right-[61%] right-4 w-[190px] rounded-xl bg-white p-3 text-[#0B1B5C]">

              <p className="text-[12px]">
                Happy Students
              </p>
               <div className='flex items-center gap-2'>
                <p className="text-xs font-bold">4.5 <span className='font-light text-[12px]'>(240K)</span> </p>
               <p><Star className='size-4'></Star></p>

               </div>
              <div className="mt-2 flex items-center">

                <div className="flex -space-x-2">
                  <div className="h-7 w-7 rounded-full bg-gray-300" />
                  <div className="h-7 w-7 rounded-full bg-gray-400" />
                  <div className="h-7 w-7 rounded-full bg-gray-500" />
                  <div className="h-7 w-7 rounded-full bg-gray-600" />
                   <div className="h-7 w-7 rounded-full bg-gray-600" />
                    
                </div>

                <span className="ml-auto rounded-full bg-lime-300 px-2 py-1 text-[8px]">
                  2K+
                </span>

              </div>

            </div>


      <Image
        src="/assets/Frame.png"
        alt=""
        width={200}
        height={150}
        className="absolute left-5 top-24 hidden md:block"
      />

      <Image
        src="/assets/Cone.png"
        alt=""
        width={200}
        height={150}
        className="absolute right-5 top-24 hidden md:block"
      />

      <Image
        src="/assets/squiggle-lime.png"
        alt=""
        width={200}
        height={160}
        className="absolute right-[19%] bottom-72 hidden md:block"
      />
       <Image
        src="/assets/faiji.png"
        alt=""
        width={200}
        height={160}
        className="absolute left-[19%] bottom-72 hidden md:block"
      />
       <Image
        src="/assets/faiji.png"
        alt=""
        width={300}
        height={160}
        className="absolute right-[21%] bottom-12 hidden md:block"
      />
       <Image
        src="/assets/mask.png"
        alt=""
        width={300}
        height={160}
        className="absolute left-[21%] bottom-12 hidden md:block"
      />

    </section>
  );
}
export default Banner