"use client";
import React, { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";

interface BurgerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
type StyledBurgerProps = {
  open: boolean;
};
const Burger = ({ open, setOpen = () => {}, ...props }: BurgerProps) => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger aria-label="Toggle Menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
    </StyledBurger>
  );
};
export default Burger;

const StyledBurger = styled.button<StyledBurgerProps>`
  font-size: 32px;
  color: #fff;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 2.25rem;
  height: 2.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 999;

  span {
    margin-bottom: 2px;
    width: 2rem;
    height: 3px !important;
    background: ${({ open }) => (open ? "#878579" : "#878579")};

    transition: all 0.3s linear;
    position: relative;
    transform-origin: 3px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(3) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(-20px)" : "translateX(0)")};
    }
    :nth-child(2) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
