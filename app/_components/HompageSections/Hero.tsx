"use client";
import Image from "next/image";
import { Grid, GridItem, css, Heading, Text, Link } from "@chakra-ui/react";

//App
import { BackgroundContainer } from "../Container/BackgroundContainer";
import { InnerWidthContainer } from "../Container/InnerWidthContainer";
import Button from "../Button/Button";

export const Hero = () => {
  return (
    <BackgroundContainer backgroundColor="#EAF2EF">
      <InnerWidthContainer id="intro">
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1.5fr" }} gap={6}>
          <GridItem display={"flex"} flexDir="column" justifyContent="center">
            <Heading as="h1" lineHeight={1} size={["xl"]}>
              Empowering Peaceful Resolutions
            </Heading>

            <Text fontSize={["md", "lg"]}>
              Gain expert guidance during difficult moments in life through mediation. At Kootenay Mediation you will find a secure environment to
              express yourself, whether individually or as a group, to cross that bridge to a just resolution. By avoiding court, you will save
              valuable time and finances.
            </Text>

            <Link
              href="#consultation"
              color="#fff"
              css={{
                backgroundColor: "#f0ac77",
                marginTop: "1rem",
                padding: "0.6rem 1.25rem",
                borderRadius: "50px",
                alignSelf: "flex-start",
                ":hover": { backgroundColor: "var(--color-button-hover)", textDecoration: "none" },
              }}
            >
              Get in Touch
            </Link>
          </GridItem>
          <GridItem pt={["2rem", 0]} display="flex" alignItems="center" justifyContent={["center", "center", "center", "right"]}>
            <Image
              src="/images/hero-olive-tree.svg"
              alt="Kootenay Mediation Hero Image"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", maxWidth: "550px", height: "auto" }}
              priority
            />
          </GridItem>
        </Grid>
      </InnerWidthContainer>
    </BackgroundContainer>
  );
};
