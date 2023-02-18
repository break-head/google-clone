import { useRouter, useSearchParams } from "next/navigation";

export default function SearchHeaderOption({ title, Icon, selected }) {
  const router = useRouter();
  const SearchParams = useSearchParams().get("term");
  const selectTap = (title) => {
    router.push(
      `/search?term=${SearchParams}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  };

  return (
    <div
      onClick={() => selectTap(title)}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon size="18px" color="gray" />
      <p>{title}</p>
    </div>
  );
}
