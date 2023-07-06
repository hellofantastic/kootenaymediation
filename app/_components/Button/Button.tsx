"use client";

import React from "react";
//import styled from "styled-components";
import styled from "@emotion/styled";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  color?: string;
  border?: string;
}

function Button({ name, icon, color, border }: ButtonProps) {
  return (
    <ButtonStyled
      style={{
        color: color,
        border: border,
      }}
    >
      {icon && icon}
      {name}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  padding: 0.6rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  background: var(--color-button-bg);
  &:hover {
    background-color: var(--color-button-hover);
    color: white;
  }
`;

export default Button;
