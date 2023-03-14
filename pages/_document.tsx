import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="A Fast and Reliable Zaobao Bot"
          />
          <meta property="og:site_name" content="zb-bot.vercel.app" />
          <meta
            property="og:description"
            content="A Fast and Reliable Zaobao Bot"
          />
          <meta property="og:title" content="Mecha" />
          <meta name="twitter:title" content="Mecha" />
          <meta
            name="twitter:description"
            content="A Fast and Reliable Zaobao Bot"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
