

import { courseIncludes } from "@/data/courses";

const EnrollCard=({ course })=> {
  const info = course.instructorInfo;

  return (
    <div className="space-y-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="font-semibold">
        {course.lessons} Lessons ({course.hours} hours)
      </h3>

      <ul className="space-y-2 text-sm">
        {course.lessonPreview.map((l) => (
          <li key={l.no} className="flex items-start justify-between gap-3">
            <span>
              <span className="mr-2 text-gray-400">{l.no}</span>
              {l.title}
            </span>
            <span className="shrink-0 text-xs text-blue-600">{l.mins} mins</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500">{course.moreVideos} more videos</p>

      <p className="text-xs text-gray-500">{course.tagline}</p>

      <div className="text-3xl font-bold">
        ${course.price}
        <span className="ml-1 text-xs font-normal text-gray-400">/lifetime</span>
      </div>

      <button className="btn w-full border-none bg-[#D9FF3D] text-black hover:bg-lime-300">
        Enroll Now
      </button>

      <div>
        <h4 className="mb-3 font-semibold">This course include</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          {courseIncludes.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-blue-600">▣</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-3 border-t pt-4">
       
        <img src={info.avatar} alt={info.name} className="h-10 w-10 rounded-full" />
        <div>
          <p className="text-sm font-semibold">{info.name}</p>
          <p className="text-xs text-gray-500">{info.role}</p>
        </div>
      </div>

      <p className="text-xs text-gray-500">{course.tagline}</p>

      <button className="btn btn-outline btn-sm w-full">See Full Profile</button>
    </div>
  );
}
export default EnrollCard