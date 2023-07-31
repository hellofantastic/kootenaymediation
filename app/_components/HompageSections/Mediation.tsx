"use client";
import Image from "next/image";

import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";

//App
import { BackgroundOliveLeafContainer } from "../Container/BackgroundOliveLeafContainer";
import { InnerWidthContainer } from "../Container/InnerWidthContainer";
import { FadeInWhenVisible } from "../_animations/FadeInWhenVisible";

export const Mediation = () => {
  return (
    <BackgroundOliveLeafContainer>
      <InnerWidthContainer id="mediation">
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={7}>
          <GridItem display="flex" alignItems="center" justifyContent={["center", "center", "center", "left"]}>
            <Image
              src="/images/couple_conversation_1.png"
              alt="Image of couple trying to communicate"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", maxWidth: "450px", height: "auto" }}
            />
          </GridItem>
          <GridItem display={"flex"} flexDir="column" justifyContent="center">
            <FadeInWhenVisible>
              <Heading pt={{ base: "2rem", lg: "0" }} size="xl">
                Mediation over Court
              </Heading>
              <Text fontSize={["md", "lg"]}>
                Mediation offers a valuable opportunity for individuals to take control of resolving their issues on their own terms. By engaging in
                mediation, involved parties can potentially save time, money, and emotional distress. In many cases, it is beneficial for separating
                individuals to find their own solutions and direct whatever resources they have towards their children's well-being or their own
                financial stability, rather than fighting in court.
              </Text>{" "}
              <Text fontSize={["md", "lg"]}>
                Mediators can offer parties legal information, provide suggestions and alternatives, and formalize agreements. Mediation may not be
                suitable in all situations, particularly where there is family violence.
              </Text>
            </FadeInWhenVisible>
          </GridItem>
        </Grid>
      </InnerWidthContainer>
    </BackgroundOliveLeafContainer>
  );
};
