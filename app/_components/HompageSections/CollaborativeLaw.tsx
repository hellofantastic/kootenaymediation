"use client";
import { useRef } from "react";
import Image from "next/image";
import { Grid, GridItem, Box, Heading, Text } from "@chakra-ui/react";

//App
import { BackgroundContainer } from "../Container/BackgroundContainer";
import { InnerWidthContainer } from "../Container/InnerWidthContainer";

export const CollaborativeLaw = () => {
  const scrollRef = useRef(null);
  return (
    <BackgroundContainer borderTop>
      <InnerWidthContainer id="collaborative-law">
        <Grid templateColumns={{ base: "1fr" }} gap={6}>
          <GridItem display={"flex"} flexDir="column" justifyContent="center">
            <Box maxW={680} css={{ margin: "0 auto" }}>
              <Heading size="xl" display="flex" justifyContent={"left"}>
                Collaborative Law{" "}
              </Heading>
              <Text fontSize={["md", "lg"]}>
                Collaborative Law is another effective approach to resolving disputes outside of court, particularly in more complex situations. This
                process involves the collaboration of two lawyers who, with combined experience, work together to find mutually agreeable outcomes. In
                many cases, other experts are involved including counselors and financial experts.
              </Text>
              <Text fontSize={["md", "lg"]}>
                Collaborative law provides a structured and supportive environment for parties to address their concerns and reach a resolution that
                meets their unique needs.
              </Text>
            </Box>
          </GridItem>

          <GridItem>
            <Image
              ref={scrollRef}
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
