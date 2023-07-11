"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

export const SectionThree = () => {
  return (
    <SectionWrapper id="collaborative">
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
        <GridItem>
          <h2>Collaborative Law </h2>
          <p>
            Collaborative Law is another effective approach to resolving disputes outside of court, particularly in more complex situations. This process involves the involvement of two lawyers who, with combined experience, work together to find
            mutually agreeable solutions. Collaborative law provides a structured and supportive environment for parties to address their concerns and reach a resolution that meets their unique needs.
          </p>
        </GridItem>
        <GridItem display="flex" alignItems="center" justifyContent="center">
          Image
        </GridItem>
      </Grid>
    </SectionWrapper>
  );
};
