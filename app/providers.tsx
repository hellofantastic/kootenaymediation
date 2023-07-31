"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

//App
import { theme } from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS={false} theme={theme}>
        {children}{" "}
      </ChakraProvider>
    </CacheProvider>
  );
}
