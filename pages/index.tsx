import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>ZB Bot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900">
          The Best ZaoBao Bot
        </h1>
        <p className="mt-5 text-lg">Earn up to 1M points overnight while this bot grinds for you</p>
        <div className="items-center space-x-6">
        <a href="/zb-bot.zip" download>
          <button className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-40 h-12">
            Download
          </button>
        </a>
        
        <Link href="docs">
          <button className="border-2 border-black rounded-xl font-medium px-4 py-2 sm:mt-10 mt-8 w-40 h-12">
            Docs &rarr;
          </button>
        </Link>
        
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Home;
