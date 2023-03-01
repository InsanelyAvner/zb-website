import Link from "next/link";
import Image from "next/image"

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <h1 className="sm:text-3xl text-2xl font-bold ml-2 tracking-tight">
          ZBSchools Bot
        </h1>

      </Link>
      <div>
        <Link href="/" className="mr-4 text-zinc-700 text-lg">Home</Link>
        <Link href="/docs" className="text-zinc-700 text-lg">Docs</Link>
      </div>

    </header>
  );
}
