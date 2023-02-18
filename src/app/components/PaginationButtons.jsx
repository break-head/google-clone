"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function PaginationButtons() {
  const searchParams = useSearchParams().get("term");
  const searchType = useSearchParams().get("searchType");
  const startIndex = Number(useSearchParams().get("start")) || 1;

  return (
    <div className="flex sm:justify-start sm:space-x-44 sm:pl-48 pb-5 px-5 justify-between text-blue-500">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${searchParams}&searchType=${searchType}&start=${
            startIndex - 10
          }`}
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <BiChevronLeft size={15} />
            <p>Prev</p>
          </div>
        </Link>
      )}

      {startIndex < 90 && (
        <Link
          href={`/search?term=${searchParams}&searchType=${searchType}&start=${
            startIndex + 10
          }`}
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <BiChevronRight size={15} />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
