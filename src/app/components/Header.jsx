import Link from "next/link";
import User from "./User";

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
        <User />
      </div>
    </header>
  );
}
