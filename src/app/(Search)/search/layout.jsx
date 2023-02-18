import SearchResults from "@components/SearchResults";
import SearchHeader from "../../components/SearchHeader";
import Head from "./head";
import Response from "../../../../Response";

export default async function SearchLayout({ children, searchParams }) {
  const results = await getGoogleSearchResults(searchParams);

  return (
    <section>
      <Head title={searchParams?.terms} />
      <SearchHeader />
      {children}
      <SearchResults results={results} />
    </section>
  );
}

async function getGoogleSearchResults(searchParams) {
  const mockData = true;
  const res = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${searchParams.terms}${
          searchParams.searchType && "&searchType=image"
        }`
      ).json();

  // if (!res.ok) {
  //   throw new Error("Something went wrong");
  // }

  return res;
}
