import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="The Best ZaoBao Bot"
          />
          <meta property="og:site_name" content="zb-bot.vercel.app" />
          <meta
            property="og:description"
            content="The Best ZaoBao Bot"
          />
          <meta property="og:title" content="ZB Bot" />
          <meta name="twitter:title" content="ZB Bot" />
          <meta
            name="twitter:description"
            content="The Best ZaoBao Bot"
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
