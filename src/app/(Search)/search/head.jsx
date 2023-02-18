// "use client";

// import { useSearchParams } from "next/navigation";

export default function Head() {
  // const searchParams = useSearchParams().get("term");
  // console.log(searchParams);
  return (
    <>
      <title>search</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="search" />
      <link
        rel="icon"
        href="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
      />
    </>
  );
}
