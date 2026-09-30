import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-xl"
    >
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={course.image} alt={course.title} className="h-44 w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium">
          {course.level}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{course.instructor}</span>
          <span className="font-semibold">⭐ {course.rating}</span>
        </div>

        <h3 className="line-clamp-2 text-lg font-semibold group-hover:text-blue-600">
          {course.title}
        </h3>

        <p className="text-xs text-gray-500">
          {course.lessons} Lessons · {course.hours}h {course.mins}m · {course.comments}
        </p>

        <div className="flex items-center justify-between pt-1">
          <div className="flex -space-x-2">
            {course.avatars.map((a) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={a} src={a} alt="" className="h-7 w-7 rounded-full border-2 border-white" />
            ))}
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-lime-300 text-[10px] font-bold">
              +{course.moreStudents}
            </span>
          </div>
          <span className="text-lg font-bold">${course.price}</span>
        </div>
      </div>
    </Link>
  );
}