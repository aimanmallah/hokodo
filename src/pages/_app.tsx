import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Navbar from '../components/NavBar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar title="Hokodo Books" url="/" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
