"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
export default function UserCard() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Image
          className="w-12 rounded-full cursor-pointer"
          onClick={() => signOut({ callbackUrl: "/" })}
          src={session?.user.image}
          alt={session?.user.name}
          width={100}
          height={100}
        />
      </>
    );
  }
  return (
    <>
      <button
        className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
