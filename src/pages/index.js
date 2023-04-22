import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex h-screen max-w-6xl justify-center items-center mx-auto space-x-3 text-white">
        <Link
          href={"/login"}
          className="p-3 bg-blue-500 rounded-xl hover:bg-blue-600"
        >
          Login
        </Link>
        <Link
          href={"/createaccount"}
          className="p-3 bg-pink-500 rounded-xl hover:bg-pink-600"
        >
          Create Account
        </Link>
      </div>
    </main>
  );
}
