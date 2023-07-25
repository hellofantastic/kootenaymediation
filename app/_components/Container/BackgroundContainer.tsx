"use client";
import styled from "@emotion/styled";

interface BgContainerProps {
  backgroundColor?: string;
}

export const BackgroundContainer = styled.div<BgContainerProps>`
  width: 100%;
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "transparent")};
`;
