import FilterButton from "./FilterButton";
import CategoryChips from "./CategoryChips";
import { CopyCheck, Funnel, Kanban, ListSortDescending } from "lucide-react";

const iconClass = "h-4 w-4";

const FunnelIcon = (
 <Funnel />
);

const LevelIcon = (
 <Kanban />
);

const CategoryIcon = (
 <CopyCheck />
);

const SortIcon = (
  <ListSortDescending />
);

const FilterBar=()=> {
  return (
    <section className="mx-auto mt-14 max-w-7xl w-full space-y-5 px-4 pb-12 sm:px-6 md:px-10 lg:px-16 xl:px-20">

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <FilterButton icon={FunnelIcon} label="Filter" />
          <FilterButton icon={LevelIcon} label="Level" />
          <FilterButton icon={CategoryIcon} label="Category" />
        </div>

        <FilterButton icon={SortIcon} label="Most relevant" />
      </div>

     
    </section>
  );
}
export default FilterBar