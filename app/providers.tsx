"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: { base: "", md: "url('/images/page-background.png')" },
        backgroundSize: "contain",
      },
    }),
  },
  fonts: {
    heading: poppins.style.fontFamily,
    body: poppins.style.fontFamily,
  },
  components: {
    Text: {
      baseStyle: {
        fontWeight: 300,
      },
    },
    Heading: {
      baseStyle: {
        color: "#497173",
        lineHeight: "1",
        marginBottom: "1rem",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS={false} theme={theme}>
        {children}{" "}
      </ChakraProvider>
    </CacheProvider>
  );
}
