import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
export default function Home() {
  return (
    <div>
      <form className="flex flex-col items-center mt-40">
        <Image
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="google-logo"
          className="object-fit:cover"
        />
        <div className="flex max-w-[90%] w-full mt-5 mx-auto border border-gray-200  hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl ">
          <BsSearch size={"20px"} className="text-gray-500 mr-3" />
          <input type="text" className="flex-grow focus:outline-none" />
          <BiMicrophone size={"25px"} />
        </div>
        <div className="flex flex-col sm:flex-row w-1/2 mt-8 sm:space-x-4 sm:space-y-0 space-y-3 justify-center">
          <button className="btn">Google Search</button>
          <button className="btn">I&apos;m Feeling Lucky</button>
        </div>
      </form>
    </div>
  );
}
