import "../src/app/globals.css"; // Modifichiamo il percorso per trovare il CSS
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/apolloClient"; // Modifichiamo il percorso per trovare il client

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}