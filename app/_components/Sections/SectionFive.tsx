"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

export const SectionFive = () => {
  return (
    <SectionWrapper width={640} id="about">
      <Grid templateColumns={{ base: "1fr" }} gap={6}>
        <GridItem>
          <h2>About</h2>
          <h3>Kootenay Mediation is Judah Harrison</h3>
          <p>
            As a family lawyer with 15 years’ experience, I am dedicated to assisting individuals and families in navigating legal issues pertaining to family breakdowns. Legal issues that must often be resolved include parenting plans, child and
            spousal support, and dividing assets and debt. On many occasions, I have seen the benefit of people resolving their legal issues on their own terms; collaboratively and outside of court.
          </p>
        </GridItem>
      </Grid>
    </SectionWrapper>
  );
};
