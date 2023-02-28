import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Docs: NextPage = () => {

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>ZB Bot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900">
          Documentation
        </h1>
        <p className="mt-5 text-lg">A guide on how to use the bot</p>
        <div className="max-w-xl w-full">
            <div className="flex mt-10 items-center space-x-3">
                <Image
                src="/1-black.png"
                width={30}
                height={30}
                alt="1 icon"
                className="mb-5 sm:mb-0"
                />
                <p className="text-left font-medium">
                Enter your ZBSchools username into <code>username.txt</code> and password into <code>password.txt</code>{" "}
                <span className="text-slate-500">
                    (this is a one-time process)
                </span>
                </p>
            </div>
            <div className="flex mt-10 items-center space-x-3">
                <Image
                src="/2-black.png"
                width={30}
                height={30}
                alt="1 icon"
                className="mb-5 sm:mb-0"
                />
                <p className="text-left font-medium">
                Run <code>main.exe</code> and enter the starting id to bot from. Id of the article is the unique number in the url<br></br>
                <span className="text-slate-500">
                    (For example, <a href="https://www.zbschools.sg/stories-26263" target="_blank" style={{textDecoration: "underline"}}>zbschools.sg/stories-26263</a> has an id of 26263)
                </span>
                </p>
            </div>

            <div className="flex mt-10 items-center space-x-3">
                <p className="text-left font-medium">
                The best way to run the bot is to run it from id 1 all the way to the max id (eg. 26000). You may continue from where you left off if the bot is stopped. The id of next article that should botted is saved in the file <code>start_id.txt</code>
                </p> 
            </div>
            <div className="flex mt-10 items-center space-x-3">
                <p className="text-left font-medium">
                    Closing the browser or the terminal will stop the bot.
                </p>
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Docs;
