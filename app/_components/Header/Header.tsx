"use client";
import React, { useState } from "react";
import { Show, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

//App
import { Sidebar } from "../MobileSidebar/Sidebar";
import Burger from "../MobileSidebar/Burger";
import { HeaderStyled } from "./HeaderStyled";

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <HeaderStyled>
      <nav>
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/kootenay-mediation-logo.svg"
              alt="Kootenay Mediation Logo"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              priority
            />
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
              <a href="#collaborative-law">Collaborative Law</a>
            </li>

            <li>
              <a href="#about-judah">About</a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
            <li>
              <a className="appointment-button" href="#consultation">
                Book a Consultation
              </a>
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
};
