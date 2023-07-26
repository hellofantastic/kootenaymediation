"use client";
import Image from "next/image";
import { Grid, GridItem, css, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

//App
import { BackgroundContainer } from "../Container/BackgroundContainer";
import { InnerWidthContainer } from "../Container/InnerWidthContainer";
import Button from "../Button/Button";
import { FadeInWhenVisible } from "../_animations/FadeInWhenVisible";
import { childAnimationVariants } from "../_animations/childAnimationVariants";

export const Hero = () => {
  return (
    <BackgroundContainer backgroundColor="#EAF2EF">
      <InnerWidthContainer id="intro">
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1.5fr" }} gap={6}>
          <GridItem display={"flex"} flexDir="column" justifyContent="center">
            <Heading as="h1" lineHeight={1} size="xl">
              Empowering Peaceful Resolutions
            </Heading>

            <Text fontSize={["sm", "md", "lg"]}>
              Gain expert guidance during difficult moments in life through mediation. At Kootenay Mediation you will find a secure environment to
              express yourself, whether individually or as a group, to cross that bridge to a just resolution. By avoiding court, you will save
              valuable time and finances.
            </Text>

            <Button color="#fff" backgroundcolor="f0ac77" css={{ alignSelf: "flex-start" }} name="Get in Touch" />
          </GridItem>
          <GridItem display="flex" alignItems="center" justifyContent={["center", "center", "center", "right"]}>
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
