import Head from 'next/head';
import { Windmill } from '@windmill/react-ui';
import tw from 'twin.macro';

import useLoader from 'hooks/useLoader';
import 'styles/index.css';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { AuthProvider, ProtectRoute } from 'context/authContext';

const AppWrapper = tw.div`min-h-screen md:mt-2 bg-gray-800 md:rounded-t-lg overflow-hidden`;

function MyApp({ Component, pageProps }) {
  const isMounted = useLoader();

  if (!isMounted) {
    return null;
  }

  return (
    <Windmill>
      <AppWrapper>
        <Head>
          <title>Phtours</title>
          <link rel='icon' href='/favicon.ico' />
          <link
            rel='stylesheet'
            href='https://unpkg.com/leaflet@1.6.0/dist/leaflet.css'
            integrity='sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
            crossOrigin=''
          />
        </Head>
        <AuthProvider>
          <ProtectRoute>
            <Navbar />
            <Component {...pageProps} />
          </ProtectRoute>
        </AuthProvider>
        <Footer />
      </AppWrapper>
    </Windmill>
  );
}

export default MyApp;
