"use client";
import { Fade, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

//App
import { BackgroundOliveLeafContainer } from "../Container/BackgroundOliveLeafContainer";
import { InnerWidthContainer } from "../Container/InnerWidthContainer";

export const Process = () => {
  return (
    <BackgroundOliveLeafContainer>
      <InnerWidthContainer width="640px" id="process">
        <Grid templateColumns={{ base: "1fr" }} gap={6}>
          <GridItem display={"flex"} flexDir="column" justifyContent="center">
            <Heading size="xl">Mediation Process: What to Expect</Heading>

            <Heading as="h3" size="md">
              Initial Contact:
            </Heading>
            <Text fontSize={["md", "lg"]}>Use our contact form below or phone to express your interest in our mediation services.</Text>

            <Heading as="h3" size="md">
              Initial Consultation:{" "}
            </Heading>
            <Text fontSize={["md", "lg"]}>
              We offer a free consultation to assess whether mediation is suitable for your situation. This consultation typically lasts 15-20
              minutes. During this time, we will discuss your needs and determine if mediation is an appropriate option.
            </Text>

            <Heading as="h3" size="md">
              Pre-Mediation Interview
            </Heading>
            <Text fontSize={["md", "lg"]}>
              If mediation is deemed appropriate, a pre-mediation interview is scheduled where all parties will individually have an opportunity to
              share their perspectives and goals for the mediation process. These meetings typically run 45 minutes to 1 hour. We will all discuss the
              need to exchange financial information, value certain assets and other prerequisites to have a more effective mediation session.
            </Text>

            <Heading as="h3" size="md">
              Mediation Session:{" "}
            </Heading>
            <Text fontSize={["md", "lg"]}>
              Once all parties have agreed to proceed, a mediation session will be scheduled. The duration of the session will vary depending on the
              complexity of the issues involved, typically lasting from 3 to 4 hours. Most families require at least two mediation sessions to resolve
              all issues, though some may need 3 sessions, others only 1 session.
            </Text>

            <Heading as="h3" size="md">
              Formalizing the Agreement:{" "}
            </Heading>
            <Text fontSize={["md", "lg"]}>
              Once an agreement is reached at a mediation, it needs to be formalized, most often in the form of a Separation Agreement. It typically
              takes an additional 4 - 5 hours for us to draft the Final Agreement, and each participant is permitted to obtain Independent Legal
              Advice on any Final Agreement before signing it.
            </Text>

            <Heading as="h3" size="md">
              Payment Arrangements:{" "}
            </Heading>
            <Text fontSize={["md", "lg"]}>
              Generally, participants split the cost of mediation equally, unless someone has kindly offered to cover the expense. This ensures a fair
              distribution of financial responsibility among the parties involved. The rate for mediation is $300 per hour.
            </Text>
            <Text fontSize={["md", "lg"]}>
              Please note that the specific details of the mediation process may vary based on individual circumstances. Our aim is to facilitate an
              effective and collaborative resolution process, providing a neutral and supportive environment for all parties involved.
            </Text>
          </GridItem>
        </Grid>
      </InnerWidthContainer>
    </BackgroundOliveLeafContainer>
  );
};
