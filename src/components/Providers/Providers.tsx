"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import StoreProvider from "./StoreProvider";

export const Provides: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    // <SessionProvider>
    <StoreProvider>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </StoreProvider>
    // </SessionProvider>
  );
};
