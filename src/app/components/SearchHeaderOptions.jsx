import SearchHeaderOption from "./SearchHeaderOption";
import { HiSearch, HiPhotograph } from "react-icons/hi";
import { useSearchParams } from "next/navigation";

export default function SearchHeaderOptions() {
  const SearchParams = useSearchParams().get("searchType");
  console.log(SearchParams);

  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm lg:pl-52 lg:justify-start border-b">
      <SearchHeaderOption
        title="All"
        Icon={HiSearch}
        selected={SearchParams === ""}
      />
      <SearchHeaderOption
        title="Images"
        Icon={HiPhotograph}
        selected={SearchParams === "image"}
      />
    </div>
  );
}
