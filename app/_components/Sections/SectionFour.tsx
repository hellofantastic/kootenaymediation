"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

export const SectionFour = () => {
  return (
    <SectionWrapper width={640}>
      <Grid templateColumns={{ base: "1fr" }} gap={6}>
        <GridItem>
          <h2>Mediation Process: What to Expect</h2>
          <h3>Initial Contact:</h3>
          <p>Use our contact form below or phone to express your interest in mediation services.</p>
          <h3>Free Consultation:</h3>
          <p>We offer a free consultation to assess whether mediation is suitable for your situation. This consultation typically lasts 15-20 minutes. During this time, we will discuss your needs and determine if mediation is the right approach.</p>
          <h3>Retainer:</h3>
          <p>If mediation is deemed appropriate, a retainer fee of $$$ will be required. This fee covers the initial meeting where all parties will have an opportunity to share their perspectives and goals for the mediation process.</p>
          <h3>Mediation Session:</h3>
          <p>
            Once all parties have agreed to proceed, a mediation session will be scheduled. The rate for mediation is $$$ per hour. The duration of the session will vary depending on the complexity of the issues involved, typically lasting from 2 to
            ? hours.
          </p>
          <h3>Payment Arrangements:</h3>
          <p>We advise that all participants split the cost of mediation equally unless someone has kindly offered to cover the expenses. This ensures a fair distribution of financial responsibility among the parties involved.</p>
          <p>
            Please note that the specific details of the mediation process may vary based on individual circumstances. Our aim is to facilitate an effective and collaborative resolution process, providing a neutral and supportive environment for all
            parties involved.
          </p>
        </GridItem>
      </Grid>
    </SectionWrapper>
  );
};
