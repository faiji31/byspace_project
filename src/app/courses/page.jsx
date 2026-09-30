import CourseCard from "@/components/cards/CoursesCard";
import FilterBar from "@/components/filter/FilterBar";
import FindCourse from "@/components/layout/FindCourse";


export const metadata = { title: "Courses | ByteSpace" };

export default function CoursesPage() {
  return (
    <div>
        <FindCourse></FindCourse>
        <div>
            <FilterBar></FilterBar>
        </div>
    </div>
    
  
  );
}