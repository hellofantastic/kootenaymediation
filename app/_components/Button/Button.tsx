"use client";

import React from "react";
//import styled from "styled-components";

import styled from "@emotion/styled";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  color?: string;
  backgroundcolor?: string;
  border?: string;
  disabled?: boolean;
  css?: Object;
}

function Button({ name, icon, color, backgroundcolor, border, disabled, css }: ButtonProps) {
  return (
    <ButtonStyled
      style={{
        color: color,
        border: border,
        ...css,
      }}
      disabled={disabled === true ? true : false}
      backgroundcolor={backgroundcolor}
    >
      {icon && icon}

      {name}
    </ButtonStyled>
  );
}
type TButtonStyledProps = {
  backgroundcolor?: string;
};
const ButtonStyled = styled.button<TButtonStyledProps>`
  padding: 0.6rem 1.25rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  background: ${({ backgroundcolor }) => (backgroundcolor ? "#" + backgroundcolor : `var(--color-button-bg)`)};
  font-size: 1rem;
  &:disabled {
    background-color: #ddd !important;
    color: #eee !important;
    cursor: not-allowed;
  }

  &:hover {
    background-color: var(--color-button-hover);
    color: white;
  }
`;

export default Button;
