import type { AppProps } from "next/app";
import Layout from "./layout";

import { CountProvider } from "../contexts/countContext";

import { usePathname } from "next/navigation";

import { ThemeProvider } from "next-themes";

import { SessionProvider } from "next-auth/react";

import { Provider } from "react-redux";
import store from "../store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const path = usePathname();
  const i = path.charAt(1).toUpperCase();
  const page = path === "/" ? "" : ` | ${i + path.slice(2, path.length)}`;
  const title = `Sycho ${page}`;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <CountProvider>
            <Head>
              <title>{title}</title>
            </Head>
            <Layout>
              <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
              </QueryClientProvider>
            </Layout>
          </CountProvider>
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
