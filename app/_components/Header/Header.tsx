"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import Button from "../Button/Button";
import { devices } from "../../constants";
function Header() {
  return (
    <HeaderStyled>
      <nav>
        <div className="logo">
          <Link href="/">
            <Image src="/images/kootenay-mediation-logo-v2.svg" alt="Kootenay Mediation Logo" width={350} height={100} priority />
          </Link>
        </div>
        <ul className="nav-items">
          <li>
            <a href="#">Mediation</a>
          </li>
          <li>
            <a href="#">Collaborative Law</a>
          </li>
          <li>
            <a href="#">Process</a>
          </li>
          <li>
            <Button name="Book a Consultation" />
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--color-border);
    display: block;
    justify-content: space-between;
    align-items: center;
    @media only screen and ${devices.lg} {
      display: flex;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      list-style: none;
      color: #548285;
      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: #ddd;
        }
      }
    }
  }
`;

export default Header;
