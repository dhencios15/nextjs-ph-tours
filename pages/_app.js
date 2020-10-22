import Head from 'next/head';
import { Windmill } from '@windmill/react-ui';
import tw from 'twin.macro';

import 'styles/index.css';
import Navbar from 'components/Navbar';

const AppWrapper = tw.div`min-h-screen md:mt-2 bg-gray-800 md:rounded-lg overflow-hidden`;

function MyApp({ Component, pageProps }) {
  return (
    <Windmill>
      <AppWrapper>
        <Head>
          <title>Booking Tour</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </AppWrapper>
    </Windmill>
  );
}

export default MyApp;
