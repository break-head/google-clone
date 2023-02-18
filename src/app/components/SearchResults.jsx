export default function SearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3">
      <p className="text-gray-600 text-sm mb-5 mt-3 sm:pl-[5%] md:pl-[14%] lg:pl-48">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
    </div>
  );
}