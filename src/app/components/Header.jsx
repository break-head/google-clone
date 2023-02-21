"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import UserCard from "./UserCard";

export default function Header() {
  const SearchParams = useSearchParams().get("term");
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <Link
          className="hover:underline cursor-pointer"
          href="https://about.google/"
        >
          About
        </Link>
        <Link
          className="hover:underline cursor-pointer"
          href="https://store.google.com/"
        >
          Store
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link
          className="hover:underline cursor-pointer"
          href="https://mail.com"
        >
          Gmail
        </Link>
        <Link
          className="hover:underline cursor-pointer"
          href={`/search?term=${SearchParams || "google"}&searchType=image`}
        >
          Images
        </Link>
        <UserCard />
      </div>
    </header>
  );
}
