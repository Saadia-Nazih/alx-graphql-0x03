"use client"; // Questo dice a Next.js che è un componente client!

import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";

// Creiamo un componente che contiene il Provider
export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}