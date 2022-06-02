import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Navbar from "../components/navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css'
        />

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
          integrity='sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
        <link
          rel='shortcut icon'
          href='https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/60349837_2330788953876010_1663721454019018752_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=stYJg8WqMccAX8U3jy2&tn=NINS3E49KtkDJG59&_nc_ht=scontent-sin6-4.xx&oh=00_AT-fZC6SXhW0igVxGZUj7hgvi04vlwiDmVoLcqRB5HLnAw&oe=62BACDD0'
          type='image/x-icon'
        />
        <Script
          src='https://kit.fontawesome.com/yourcode.js'
          crossorigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css'
        />
      </Head>
      <body>
        <Navbar />

        <Component {...pageProps} />
        <Script src='https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js' />
        <Script src='https://unpkg.com/flowbite@1.4.7/dist/flowbite.js' />
      </body>
    </>
  );
}

export default MyApp;
