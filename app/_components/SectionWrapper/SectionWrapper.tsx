"use client";
import styled from "@emotion/styled";

interface SectionWrapperProps {
  width?: Number;
}

export const SectionWrapper = styled.div<SectionWrapperProps>`
  max-width: ${(props) => (props.width ? props.width + "px" : "1200px")};
  padding: 4rem 2rem;
  margin: 0 auto;
`;
