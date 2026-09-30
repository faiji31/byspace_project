import CourseCard from "@/components/cards/CoursesCard";
import { courses } from "@/data/courses";

export const metadata = { title: "Courses | ByteSpace" };

export default function CoursesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">All Courses</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
}