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
        <p className="mt-5 text-lg">A complete guide on how to use the bot and extra troubleshooting</p>
        <h2 className="sm:text-3xl text-2xl max-w-2xl font-bold text-slate-900 mt-12 mb-4">Requirements</h2>
        <div className="max-w-xl">
          <ul className="list-disc list-inside text-left font-medium">
            <li>Operating System: Windows 10 or Higher</li>
            <li>Memory: 4GB or higher</li>
            <li>Stable Internet Connection</li>
            <li>Web Browser: Chrome</li>
            <li>FInished ZaoBao Intro Quiz</li>
          </ul>
        </div>
        <h2 className="sm:text-3xl text-2xl max-w-2xl font-bold text-slate-900 mt-16">How to Use</h2>
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
                  Run <code>main.exe</code> and enter your username and password. Thn, enter the ID of the article that you want to start from.<br></br>
                <span className="text-slate-500">
                    (I recommend you to bot starting from id 1 all the way to 27000. This way, you can go through all the articles)
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
                  A new window will pop up. Do not close the window or the console unless you want to stop the bot. To continue from the ID you last stopped at, you can choose the "start from where you last stopped" option when running the program
                </p>
            </div>

            <div className="flex mt-10 items-center space-x-3">
                <p className="text-left font-medium">
                  The ID of where you last stopped is stored in the file <code>data/start_id.txt</code>. You may manualy access the file and input the ID or choose the option to continue from where you last stopped
                </p> 
            </div>
            <div className="flex mt-10 items-center space-x-3">
                <p className="text-left font-medium">
                  To update the bot, remember your start id, download the newest version here, enter your username and password, then enter your start id.
                </p> 
            </div>
        </div>


        <h2 className="sm:text-3xl text-2xl max-w-2xl font-bold text-slate-900 mt-16">
          Possible Errors
        </h2>
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
                <span className="text-xl">Chrome Download Error</span>
                  <Image
                  src="/error-1.png"
                  width={400}
                  height={56}
                  alt="Chrome Download Error"
                  className="mb-5 sm:mb-5 mt-5"
                  />
                  To fix, click the up arrow and select the "keep" option
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
                  <span className="text-xl">Windows Defender Smartscreen Error</span>
                  <Image
                  src="/error-2.png"
                  width={517}
                  height={470}
                  alt="1 icon"
                  className="mb-5 sm:mb-5 mt-5"
                  />
                  To fix, click on <u>More info</u>, the click the white button saying "Run anyway"
                </p>
            </div>
        </div>
      <div className="flex mt-10 items-center space-x-3">
          <p className="text-left font-medium">
            This bot is safe to use. These alerts are just protective measures that target unrecognised files.
          </p> 
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Docs;
