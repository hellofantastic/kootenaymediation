"use client";
import Link from "next/link";
import styled from "@emotion/styled";
import { Grid, GridItem, Box } from "@chakra-ui/react";

export const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <BackgroundImageContainer>
      <Box className="footer" sx={{ a: { color: "#497173" } }} maxW={1200} m="auto" p="4rem 2rem 1rem 2rem">
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6} rowGap={"1"}>
          <GridItem display="flex">
            <Link href="/">©{year} Kootenay Mediation</Link>
          </GridItem>
          <GridItem>211-402 Baker St., Nelson B.C.</GridItem>
          <GridItem display="flex" justifyContent="right">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </GridItem>
        </Grid>
      </Box>
    </BackgroundImageContainer>
  );
};

const BackgroundImageContainer = styled.footer`
  width: 100%;
  background: url("/images/footer-bg_1.png");
  background-repeat: no-repeat;
  background-position-y: top;
  background-size: cover;
  padding-top: 4rem;
`;
