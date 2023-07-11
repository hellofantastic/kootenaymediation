"use client";
import React, { useState } from "react";
import { Show, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

//App
import { Sidebar } from "../MobileSidebar/Sidebar";
import { Burger, MobileMenu } from "../Nav";
import Button from "../Button/Button";
import { devices } from "../../constants";

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const handleMenuCloseOnNavigate = () => {
    setOpen(false);
  };
  return (
    <HeaderStyled>
      <nav>
        <div className="logo">
          <Link href="/">
            <Image src="/images/kootenay-mediation-logo-v2.svg" alt="Kootenay Mediation Logo" width={325} height={100} priority />
          </Link>
        </div>
        <Show breakpoint="(min-width: 1024px)">
          <ul className="nav-items">
            <li>
              <Link href="#mediation" scroll={false}>
                Mediation
              </Link>
            </li>
            <li>
              <a href="#">Collaborative Law</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Process</a>
            </li>
            <li>
              <Button name="Book a Consultation" />
            </li>
          </ul>
        </Show>
        <Show breakpoint="(max-width: 1024px)">
          <div>
            <Burger open={open} setOpen={setOpen} />
            <Sidebar open={open} setOpen={setOpen} />
          </div>
        </Show>
      </nav>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--color-border);
    display: flex;
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

      list-style: none;
      color: #548285;
      li {
        transition: all 0.2s ease-in-out;
        margin-right: 1.25rem;
        &:hover {
          color: #ddd;
        }
        a,
        button {
          font-size: 0.95rem;
        }
      }
    }
  }
`;

export default Header;
