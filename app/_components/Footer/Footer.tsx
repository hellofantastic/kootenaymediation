"use client";
import Link from "next/link";
import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import { InnerWidthContainer } from "../Container/InnerWidthContainer";

export const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <Box className="footer" sx={{ a: { color: "#79b4b7" } }}>
      <InnerWidthContainer>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          <GridItem>
            <Text>©{year} Kootenay Mediation</Text>
          </GridItem>
          <GridItem display="flex" justifyContent="right">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </GridItem>
        </Grid>
      </InnerWidthContainer>
    </Box>
  );
};
