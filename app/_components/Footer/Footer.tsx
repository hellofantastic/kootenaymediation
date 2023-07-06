"use client";
import Link from "next/link";
import { Grid, GridItem } from "@chakra-ui/react";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

export const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <SectionWrapper className="footer">
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
        <GridItem>©{year} Kootenay Mediation</GridItem>
        <GridItem display="flex" justifyContent="right">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </GridItem>
      </Grid>
    </SectionWrapper>
  );
};
