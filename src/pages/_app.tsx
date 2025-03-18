import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from "@/redux/store"
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>


      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>

    </>
  );
}
