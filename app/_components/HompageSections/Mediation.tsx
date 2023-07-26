"use client";
import Image from "next/image";
import styled from "@emotion/styled";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { InnerWidthContainer } from "../Container/InnerWidthContainer";

export const Mediation = () => {
  return (
    <BackgroundWrapper>
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
          <GridItem>
            <Heading pt={{ base: "4rem", lg: "0" }} size="lg">
              Mediation over Court
            </Heading>
            <Text fontSize={["sm", "md", "lg"]}>
              Mediation offers a valuable opportunity for individuals to take control of resolving their issues on their own terms. By engaging in
              mediation, involved parties can potentially save time, money, and emotional distress. In many cases, it is beneficial for separating
              individuals to find their own solutions and direct whatever resources they have towards their children's well-being or their own
              financial stability, rather than fighting in court.
            </Text>{" "}
            <Text fontSize={["sm", "md", "lg"]}>
              Mediators can offer parties legal information, provide suggestions and alternatives, and formalize agreements. Mediation may not be
              suitable in all situations, particularly where there is family violence.
            </Text>
          </GridItem>
        </Grid>
      </InnerWidthContainer>
    </BackgroundWrapper>
  );
};

const BackgroundWrapper = styled.div`
  background: url("/images/section_1_top_border_1.png");
  background-repeat: no-repeat;
  background-position-y: top;
  background-size: contain;
  padding-top: 7rem;

  @media only screen and (min-width: 1400px) {
    background: url("/images/section_1_top_border_lg_1.png");
    background-repeat: no-repeat;
    background-position-y: top;
    background-size: contain;
  }
`;
