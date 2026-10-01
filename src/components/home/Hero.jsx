import {
  CheckCircle2,
  Star,
  ArrowRight,
  Clock3,
  BookOpen,
  Users,
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="min-w-full overflow-hidden bg-white text-[#252733]">
      <section className="relative overflow-hidden bg-white pb-4 pt-2 lg:pt-3">
        <div className="absolute left-[-150px] top-[-150px] h-[500px] w-[500px] rounded-full bg-lime-200/60 blur-[120px]" />

        <div className="absolute right-[-150px] top-[-100px] h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-6 text-gray-500">
              Explore our curated selection of courses tailored to enhance your
              capabilities and <br /> accelerate your career journey. Whether
              you are looking to sharpen specific skills, <br /> gain industry
              expertise, or embark on a new career path entirely,we have the
              resources you need.
            </p>

            <div className="mt-8 flex gap-10">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600">12K</h3>
                <p className="text-sm text-gray-500">Students</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-blue-600">70+</h3>
                <p className="text-sm text-gray-500">Courses</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-blue-600">16</h3>
                <p className="text-sm text-gray-500">Creators</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute left-0 top-0 z-20 w-[220px] rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
              <div className="h-[115px] overflow-hidden rounded-xl bg-gray-100">
                <img
                  src="/assets/course.jpg"
                  alt="Course"
                  className="h-full w-full object-cover"
                />
              </div>

              <h4 className="mt-3 text-sm font-semibold">
                Learn Figma from Scratch
              </h4>

              <p className="mt-1 text-[10px] text-purple-500">
                by purepati studio
              </p>

              <div className="mt-3 flex items-center gap-3 text-[9px] text-gray-500">
                <span>17 Lessons</span>
                <span>2 hours 16 mins</span>
              </div>

              <div className="mt-3 text-xs">
                <span className="font-semibold text-blue-600">$25</span>
                <span className="text-gray-400"> / lifetime</span>
              </div>
            </div>

            <div className="relative mt-12 h-[390px] w-[430px]">
              <img
                src="/assets/student-man.png"
                alt="Student"
                className="absolute bottom-0 right-5 z-10 h-full object-contain"
              />

              <div className="absolute right-0 top-32 z-30 w-[150px] rounded-xl bg-white p-4 shadow-lg">
                <p className="text-[9px] text-gray-500">Learning Progress</p>

                <h3 className="mt-1 text-3xl font-bold">55%</h3>

                <div className="mt-2 h-1.5 rounded-full bg-gray-200">
                  <div className="h-full w-[55%] rounded-full bg-lime-400" />
                </div>
              </div>

              <div className="absolute right-[-25px] top-20 z-20 rotate-[-15deg]">
                <Image
                  src={"/assets/Frame.png"}
                  alt=""
                  height={150}
                  width={150}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-4 lg:py-6">
        <div className="absolute bottom-[-150px] left-[-100px] h-[450px] w-[450px] rounded-full bg-lime-200/60 blur-[120px]" />

        <div className="absolute right-[-150px] top-[-100px] h-[450px] w-[450px] rounded-full bg-blue-100/70 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative flex justify-center ">
            <div className="absolute left-0 top-0 z-30 w-[205px] rounded-xl bg-blue-600 p-3 text-white shadow-lg">
              <p className="text-[15px]">Total Revenue</p>

              <p className="text-[7px] opacity-70">July 1-28</p>

              <h3 className="mt-2 text-lg font-bold">$120.29</h3>

              <div className="mt-2 h-1 rounded-full bg-lime-400" />
            </div>

            <div className="absolute left-0 top-30 z-20 w-[145px] rounded-xl bg-blue-600 p-3 text-white shadow-lg">
              <p className="text-[8px]">Year to Date</p>

              <p className="text-[12px] opacity-70">2023</p>

              <h3 className="mt-2 text-lg font-bold">$1,200.38</h3>

              <span className="mt-2 inline-block rounded-full bg-lime-400 px-2 py-1 text-[7px] text-black">
                +12%
              </span>
            </div>

            <img
              src="/assets/student-woman.png"
              alt="Student"
              className="relative z-10 h-[390px] object-contain"
            />

            <div className="absolute bottom-8 right-0 z-30 w-[170px] rounded-xl bg-white p-3 shadow-lg">
              <p className="text-[12px]">Happy Students</p>

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

            <div className="absolute right-[-15px] top-14 z-20 rotate-[-15deg]">
              <Image
                src={"/assets/Frame.png"}
                alt=""
                height={150}
                width={150}
              ></Image>
            </div>
          </div>

          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight">
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p className="mt-6 text-sm leading-6 text-gray-500">
              <span className="font-bold text-black">ByteSpace</span> supports
              individuals or entities in the creation, publication, <br /> and
              administration of educational courses.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold"
                >
                  <CheckCircle2
                    size={20}
                    className="fill-blue-600 text-white "
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Hero;
