"use client";
import { extendTheme } from "@chakra-ui/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const theme = extendTheme({
  styles: {
    global: () => ({
      "*": {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
      },
      "*,html": {
        scrollBehavior: "smooth !important",
      },
      body: {
        bg: { base: "", md: "url('/images/page-background.png')" },
        backgroundSize: { base: "", md: "contain" },
        backgroundPosition: { baes: null, md: "bottom" },
        color: "#33494a",
      },
      "html, body": {
        maxWidth: "100vw",
        overflowX: "hidden",
        fontSize: "1rem",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      p: {
        marginBottom: "1rem",
      },
      "h1,h2,h3,h4,h5": {
        lineHeight: "1.1 !important",
      },

      "h2,h3,h4,h5": {
        marginTop: "2rem",
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
