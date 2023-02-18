import SearchResults from "@components/SearchResults";
import Response from "Response";
export default async function Search({ searchParams }) {
  const results = await getGoogleSearchResults(searchParams);

  return (
    <>
      <SearchResults results={results} />
    </>
  );
}

async function getGoogleSearchResults(searchParams) {
  const startIndex = searchParams.start || 1;
  const mockData = true;
  const res = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${searchParams.term}${
          searchParams.searchType && "&searchType=image"
        }&start=${startIndex}`
      );

  // const data = await res.json();
  // if (!res.ok) {
  //   throw new Error("Something went wrong");
  // }
  // console.log(data);
  return res;
}
