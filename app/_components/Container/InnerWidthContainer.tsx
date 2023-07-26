"use client";
import styled from "@emotion/styled";

interface ContainerProps {
  width?: string;
}

export const InnerWidthContainer = styled.div<ContainerProps>`
  max-width: ${(props) => (props.width ? props.width : "1200px")};
  margin: 0 auto;
  padding: 5rem 2rem 7rem;
`;
