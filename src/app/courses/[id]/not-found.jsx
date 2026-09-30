import Link from "next/link";

const CourseNotFound=()=> {
  return (
    <div className="flex min-h-[60vh] bg-[#0A38F5] flex-col items-center justify-center gap-4">
        <div
      className="pointer-events-none absolute inset-0 z-0 opacity-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    /> 
    <h1  className="
          pointer-events-none
          absolute
          left-1/2
          top-2/6
          z-0
          -translate-x-1/2
          -translate-y-1/2
          select-none
          text-[180px]
          font-black
          leading-none
          text-[#D9FF3D]/20
          sm:text-[220px]
          md:text-[280px]
          lg:text-[350px]
        ">404</h1>
      <h1 className="text-5xl text-white font-bold text-center">The page you are looking <br /> for doesn’t exist</h1>
      <p className="text-white text-[10px] font-light">Try to use a correct url or go back to homepage to start again</p>
      <Link href="/courses" className="btn border-none rounded-full font-semibold bg-[#D9FF3D] text-black">
        Back to Home
      </Link>
    </div>
  );
}
export default CourseNotFound