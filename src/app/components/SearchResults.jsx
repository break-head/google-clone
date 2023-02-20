import Parser from "html-react-parser";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

export default function SearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3">
      <p className="text-gray-600 text-sm mb-5 mt-3 sm:pl-[5%] md:pl-[14%] lg:pl-48">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div
          key={result.link}
          className="max-w-3xl mb-8 sm:pl-[5%] md:pl-[14%] lg:pl-48"
        >
          <div className="group">
            <Link className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-800"
              href={result.link}
            >
              <h2 className="truncate text-xl font-medium text-blue-800">
                {result.title}
              </h2>
            </Link>
          </div>
          {result.htmlSnippet && (
            <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
          )}
        </div>
      ))}
      <div className="">
        <PaginationButtons />
      </div>
    </div>
  );
}
