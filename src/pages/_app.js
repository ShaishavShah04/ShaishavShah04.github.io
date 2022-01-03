import Theme from '../styles/theme';
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="My portfolio website!"
      />
      <link rel="shortcut icon" href="./favicon.ico" />
      <title>Hey! I'm Shaishav</title>
    </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 