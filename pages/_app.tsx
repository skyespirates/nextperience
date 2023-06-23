import type { AppProps } from "next/app";
import Layout from "./layout";

import { CountProvider } from "../contexts/countContext";

import { usePathname } from "next/navigation";

import { ThemeProvider } from "next-themes";

import { SessionProvider } from "next-auth/react";

import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const path = usePathname();
  const i = path.charAt(1).toUpperCase();
  const page = path === "/" ? "" : ` | ${i + path.slice(2, path.length)}`;
  const title = `Sycho ${page}`;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SessionProvider session={pageProps.session}>
        <CountProvider>
          <Head>
            <title>{title}</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CountProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
