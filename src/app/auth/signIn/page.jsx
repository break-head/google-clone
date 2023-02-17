"use client";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  });
  if (status === "loading") {
    return (
      <div className="flex justify-center mt-40">
        <Image height={300} width={300} src="/spinner.svg" alt="loading" />
      </div>
    );
  }
  return (
    <div className="mt-40">
      <div className="flex flex-col items-center">
        <Image
          width={500}
          height={100}
          className="w-52 object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="google-logo"
        />
        <p className="text-sm italic my-10 text-center ">
          This website is created for learning
        </p>
        <button
          className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Sign in with google
        </button>
      </div>
    </div>
  );
}
