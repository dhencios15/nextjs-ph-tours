import 'styles/index.css';
import tw from 'twin.macro';

const AppWrapper = tw.main`min-h-screen bg-gray-900`;

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
