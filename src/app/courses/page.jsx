import CoursesCard from "@/components/cards/CoursesCard";
import CategoryChips from "@/components/filter/CategoryChips";
import FilterBar from "@/components/filter/FilterBar";
import FindCourse from "@/components/layout/FindCourse";
import { courses } from "@/data/courses";


export const metadata = { title: "Courses | ByteSpace" };

export default function CoursesPage() {
  return (
    <div>
        <FindCourse></FindCourse>
        <div>
            <FilterBar></FilterBar>
            
        </div>
        <div  className="mt-10 max-w-7xl w-full mx-auto">
           <CategoryChips />
        </div>
        <div className="mt-10 max-w-7xl w-full mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CoursesCard key={course.id} course={course} />
        ))}
      </div>
    </div>
    
  
  );
}