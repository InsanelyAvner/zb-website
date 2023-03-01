import Link from "next/link";
import Image from "next/image"

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <h1 className="sm:text-3xl text-2xl font-bold ml-2 tracking-tight">
          ZB Bot
        </h1>
      </Link>
      <div>
        <Link href="/" className="mr-4 text-zinc-700 text-lg">Home</Link>
        <Link href="/docs" className="text-zinc-700 text-lg">Docs</Link>
        <a download href="/files/zb-bot.zip" className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-40 h-12 ml-4">Download</a>
      </div>

    </header>
  );
}
