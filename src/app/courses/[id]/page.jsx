import { notFound } from "next/navigation";
import { courses, getCourseById } from "@/data/courses";
import CourseHero from "@/components/course/CourseHero";
import EnrollCard from "@/components/course/EnrollCard";
import CourseTabs from "@/components/course/CourseTab";


export function generateStaticParams() {
  return courses.map((c) => ({ id: String(c.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = getCourseById(id);
  return { title: course ? `${course.title} | ByteSpace` : "Course not found" };
}

export default async function CourseDetailsPage({ params }) {
  const { id } = await params; 
  const course = getCourseById(id);
  if (!course) notFound();

  return (
    <main className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[520px] bg-[#0A2CFF] lg:h-[560px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_340px]">
        <div>
          <CourseHero course={course} />
          <div className="mt-10">
            <CourseTabs course={course} />
          </div>
        </div>

        <aside className="lg:sticky lg:top-6 lg:self-start lg:pt-20">
          <EnrollCard course={course} />
        </aside>
      </div>
    </main>
  );
}
