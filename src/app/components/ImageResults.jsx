import Image from "next/image";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

export default function ImageResults({ results }) {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items?.map((result) => (
          <div key={result.link} className="mb-8">
            <div className="group ">
              <Link href={result.image.contextLink}>
                <Image
                  src={result.link}
                  alt={result.title}
                  width={result.image.width}
                  height={result.image.height}
                  className="group-hover:shadow-xl w-full h-60 object-contain"
                />
              </Link>
              <Link
                className="group-hover:underline"
                href={result.image.contextLink}
              >
                <h2 className="truncate text-xl">{result.title}</h2>
              </Link>
              <Link
                className="group-hover:underline"
                href={result.image.contextLink}
              >
                <h2 className="text-gray-600">{result.displayLink}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <PaginationButtons />
      </div>
    </div>
  );
}
9651;
