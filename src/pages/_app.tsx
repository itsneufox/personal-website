import Head from "next/head";
import "../styles/base.scss";
import "../styles/fonts.css";
import { AppProps } from "next/app";
import { LanguageProvider } from "../context/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Head>
        <title>CV&nbsp;|&nbsp;João Lopes Frias</title>
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}