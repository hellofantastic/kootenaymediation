"use client";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { BackgroundOliveLeafContainer } from "../Container/BackgroundOliveLeafContainer";
import { InnerWidthContainer } from "../Container/InnerWidthContainer";

export const SectionFour = () => {
  return (
    <BackgroundOliveLeafContainer>
      <InnerWidthContainer width="640px" id="process">
        <Grid templateColumns={{ base: "1fr" }} gap={6}>
          <GridItem>
            <Heading size="lg">Mediation Process: What to Expect</Heading>
            <Heading as="h3" size="md">
              Initial Contact:
            </Heading>
            <Text fontSize={["sm", "md", "lg"]}>Use our contact form below or phone to express your interest in mediation services.</Text>
            <Heading as="h3" size="md">
              Free Consultation:{" "}
            </Heading>
            <Text fontSize={["sm", "md", "lg"]}>
              We offer a free consultation to assess whether mediation is suitable for your situation. This consultation typically lasts 15-20
              minutes. During this time, we will discuss your needs and determine if mediation is the right approach.
            </Text>
            <Heading as="h3" size="md">
              Retainer:{" "}
            </Heading>
            <Text fontSize={["sm", "md", "lg"]}>
              If mediation is deemed appropriate, a retainer fee of $$$ will be required. This fee covers the initial meeting where all parties will
              have an opportunity to share their perspectives and goals for the mediation process.
            </Text>
            <Heading as="h3" size="md">
              Mediation Session:{" "}
            </Heading>
            <Text fontSize={["sm", "md", "lg"]}>
              Once all parties have agreed to proceed, a mediation session will be scheduled. The rate for mediation is $$$ per hour. The duration of
              the session will vary depending on the complexity of the issues involved, typically lasting from 2 to ? hours.
            </Text>
            <Heading as="h3" size="md">
              Payment Arrangements:{" "}
            </Heading>
            <Text fontSize={["sm", "md", "lg"]}>
              We advise that all participants split the cost of mediation equally unless someone has kindly offered to cover the expenses. This
              ensures a fair distribution of financial responsibility among the parties involved.
            </Text>
            <Text fontSize={["sm", "md", "lg"]}>
              Please note that the specific details of the mediation process may vary based on individual circumstances. Our aim is to facilitate an
              effective and collaborative resolution process, providing a neutral and supportive environment for all parties involved.
            </Text>
          </GridItem>
        </Grid>
      </InnerWidthContainer>
    </BackgroundOliveLeafContainer>
  );
};
