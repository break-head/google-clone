import Link from "next/link";
import UserCard from "./UserCard";

export default function Header() {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <Link className="hover:underline cursor-pointer" href="/">
          About
        </Link>
        <Link className="hover:underline cursor-pointer" href="/">
          Store
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link className="hover:underline cursor-pointer" href="/">
          Gmail
        </Link>
        <Link className="hover:underline cursor-pointer" href="/">
          Images
        </Link>
        <UserCard />
      </div>
    </header>
  );
}
