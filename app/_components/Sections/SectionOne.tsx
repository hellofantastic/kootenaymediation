"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

export const SectionOne = () => {
  return (
    <SectionWrapper className="knobs">
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1.5fr" }} gap={6}>
        <GridItem>
          <h1>Empowering Peaceful Resolutions</h1>
          <p>
            Gain expert assistance during difficult moments in life through mediation. At Kootenay Mediation you will find a secure environment to express yourself, whether individually or as a group, to reach a just resolution. By avoiding court,
            you will save valuable time and finances.
          </p>
        </GridItem>
        <GridItem display="flex" alignItems="center" justifyContent="center">
          Image
        </GridItem>
      </Grid>
    </SectionWrapper>
  );
};
