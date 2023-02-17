import SearchHeader from "../../components/SearchHeader";
import Head from "./head";

export default function SearchLayout({ children }) {
  return (
    <section>
      <Head />
      <SearchHeader />
      {children}
    </section>
  );
}
