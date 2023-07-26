"use client";
import styled from "@emotion/styled";

interface BgContainerProps {
  backgroundColor?: string;
  borderTop?: boolean;
}

export const BackgroundContainer = styled.div<BgContainerProps>`
  width: 100%;
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "transparent")};
  border-top: ${({ borderTop }) => (borderTop ? "1px solid #dbe4e1" : "none")};
`;
