import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import NavLink from "./NavLink";
import { navLinks } from "./navLinks";

const fadeOut = keyframes`
  from {
    opacity: 0;
  
  }
  to {
    opacity: 1;
  }
  
`;
const FadeContainer = styled.div`
  animation: ${fadeOut} ease 1.4s;
  opacity: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;

  background: #0c1e2c;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.4s ease-in-out;
  z-index: 989;
  button,
  a,
  span {
    display: block;
    font-size: 2.8rem;
    padding: 1rem 0;
    background: none;
    border: none;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: left;
    cursor: pointer;
    &:hover {
      color: #f63a7a;
    }
  }
`;
const LogoWrapper = styled.div`
  > img {
    max-width: 165px;
  }
`;
const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 300px;
  justify-content: center;
  margin: 0 auto;
`;
const MobileMenu = ({ open, closeOnNavigate, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {open ? (
        <>
          <FadeContainer>
            <LogoWrapper>
              <Image src="/images/kootenay-mediation-logo-v2.svg" alt="Kootenay Mediation Logo" width={325} height={100} priority />
            </LogoWrapper>
            <NavItems>
              {navLinks.map(({ navLinkId, scrollToId }, index) => (
                <NavLink key={index} navLinkId={navLinkId} scrollToId={scrollToId} closeOnNavigate={closeOnNavigate} />
              ))}
            </NavItems>
          </FadeContainer>
        </>
      ) : null}
    </StyledMenu>
  );
};

export default MobileMenu;
