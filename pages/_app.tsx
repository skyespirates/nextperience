"use client";
import type { AppProps } from "next/app";
import Layout from "./layout";

import { CountProvider } from "../contexts/countContext";

import { ThemeProvider } from "next-themes";

import { SessionProvider } from "next-auth/react";

import { Provider } from "react-redux";
import store from "../store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
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
              <title>Sycho</title>
            </Head>
            <Layout>
              <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen />
              </QueryClientProvider>
            </Layout>
          </CountProvider>
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
