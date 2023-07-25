"use client";
import Image from "next/image";
import { Grid, GridItem, Box, Heading, Text } from "@chakra-ui/react";
import { BackgroundContainer } from "../Container/BackgroundContainer";
import { InnerWidthContainer } from "../Container/InnerWidthContainer";

export const SectionThree = () => {
  return (
    <BackgroundContainer style={{ borderTop: "1px solid #EAF2EF" }}>
      <InnerWidthContainer id="collaborative-law">
        <Grid templateColumns={{ base: "1fr" }} gap={6}>
          <GridItem display="flex" w="100%" justifyContent="center">
            <Box display="flex" flexDirection="column" justifyContent="center" maxW={450}>
              <Heading size="lg" display="flex" justifyContent={"center"}>
                Collaborative Law{" "}
              </Heading>
              <Text fontSize={["sm", "md", "lg"]} textAlign="center">
                Collaborative Law is another effective approach to resolving disputes outside of court, particularly in more complex situations. This
                process involves the involvement of two lawyers who, with combined experience, work together to find mutually agreeable solutions.
                Collaborative law provides a structured and supportive environment for parties to address their concerns and reach a resolution that
                meets their unique needs.
              </Text>
            </Box>
          </GridItem>
          <GridItem display="flex" alignItems="center" justifyContent="center">
            <Image
              src="/images/collaborative_scene_1.png"
              alt="People practicing collaborative law"
              width="0"
              height="0"
              sizes="90vw"
              style={{ width: "100%", height: "auto", paddingTop: "2rem" }}
            />
          </GridItem>
        </Grid>
      </InnerWidthContainer>
    </BackgroundContainer>
  );
};
