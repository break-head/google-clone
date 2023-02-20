import ImageResults from "@components/ImageResults";
import SearchResults from "@components/SearchResults";
import Response from "Response";

export default async function Search({ searchParams }) {
  const startIndex = searchParams.start || 1;

  const searchData = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${searchParams.term}${
      searchParams.searchType && "&searchType=image"
    }&start=${startIndex}`,
    { cache: "no-store" }
  ).then((res) => res.json());

  // const results = JSON.stringify(searchData, null, 2);
  console.log(JSON.stringify(searchData, null, 2));
  return (
    <>
      {searchParams.searchType === "image" ? (
        <ImageResults results={searchData} />
      ) : (
        <SearchResults results={searchData} />
      )}
    </>
  );
}
