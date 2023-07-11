"use client";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

export const SectionTwo = () => {
  return (
    <SectionWrapper id="mediation">
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
        <GridItem display="flex" alignItems="center" justifyContent="center">
          Image
        </GridItem>
        <GridItem>
          <h2>Mediation over Court</h2>

          <p>
            {
              "Mediation offers a valuable opportunity for individuals to take control of resolving their issues on their own terms. By engaging in mediation, involved parties can potentially save time, money, and emotional distress. In many cases, it is beneficial for separating individuals to find their own solutions and direct whatever resources they have towards their children's well-being or their own financial stability, rather than fighting in court. Mediators can offer parties legal information, provide suggestions and alternatives, and formalize agreements. Mediation may not be suitable in all situations, particularly where there is family violence."
            }
          </p>
        </GridItem>
      </Grid>
    </SectionWrapper>
  );
};
