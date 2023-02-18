"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import UserCard from "./UserCard";
import SearchHeaderOptions from "./SearchHeaderOptions";
export default function SearchHeader() {
  const router = useRouter();
  const params = useSearchParams().get("term");

  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          width="120"
          height="40"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="google-logo"
          className="object-fit:contain"
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-6xl items-center">
          <input
            type="text"
            defaultValue={params}
            ref={searchInputRef}
            className="w-full focus:outline-none"
          />
          <HiX
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 cursor-pointer sm:mr-3"
          />
          <BiMicrophone className="h-7 w-7 pl-2 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 mr-3 " />
          <BsSearch className="h-6 hidden sm:inline-flex" />
          <button onClick={search} type="submit" hidden />
        </form>
        <UserCard className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
