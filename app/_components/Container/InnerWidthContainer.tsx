"use client";
import styled from "@emotion/styled";

interface ContainerProps {
  width?: string;
}

export const InnerWidthContainer = styled.div<ContainerProps>`
  max-width: ${(props) => (props.width ? props.width : "1200px")};
  margin: 0 auto;
  padding: 2rem 2rem 3rem;

  @media only screen and (min-width: 640px) {
    padding: 4rem 2rem 5rem;
  }

  @media only screen and (min-width: 1024px) {
    padding: 5rem 2rem 7rem;
  }
`;
