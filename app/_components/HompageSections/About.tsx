"use client";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { BackgroundContainer } from "../Container/BackgroundContainer";
import { InnerWidthContainer } from "../Container/InnerWidthContainer";

export const About = () => {
  return (
    <BackgroundContainer backgroundColor="#EAF2EF">
      <InnerWidthContainer width="640px" id="about-judah">
        <Grid templateColumns={{ base: "1fr" }} gap={6}>
          <GridItem display={"flex"} flexDir="column" justifyContent="center">
            <Heading size="xl">About</Heading>
            <Heading as="h3" size="md">
              Kootenay Mediation is Judah Harrison
            </Heading>
            <Text fontSize={["sm", "md", "lg"]}>
              As a family lawyer with 15 years experience, I am dedicated to assisting individuals and families in navigating legal issues pertaining
              to family breakdowns. Legal issues that must often be resolved include parenting plans, child and spousal support, and dividing assets
              and debt. On many occasions, I have seen the benefit of people resolving their legal issues on their own terms; collaboratively and
              outside of court.
            </Text>
          </GridItem>
        </Grid>
      </InnerWidthContainer>
    </BackgroundContainer>
  );
};
