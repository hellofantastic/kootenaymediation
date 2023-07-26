"use client";

import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Mediation", to: "#mediation", id: 1 },
  { name: "Collaborative Law", to: "#collaborative-law", id: 2 },
  { name: "About", to: "#about", id: 3 },
  { name: "Process", to: "#process", id: 4 },
  { name: "Book and Appointment", to: "#consultation", id: 5 },
];

interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const Sidebar = ({ open = false, setOpen = () => {} }: SidebarProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <MotionContentContainer
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          >
            <MobileNavContainer>
              <MobileNav>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.to} scroll={false} onClick={() => setOpen(false)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </MobileNav>
            </MobileNavContainer>
          </MotionContentContainer>
          <MotionClickOutsideOverlay
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setOpen((open) => !open)}
          />
        </>
      )}
    </AnimatePresence>
  );
};

const MotionContentContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 30rem;
  background-color: #fff;
  height: 100vh;
  padding: 1.5rem;
  z-index: 998;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
const MobileNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const MobileNav = styled.ul`
  list-style: none;
  width: 100%;
  font-size: 1.4rem;
  li {
    text-align: center;
    a {
      transition: all 0.2s ease-in-out;
      color: #486f70;
      &:hover {
        color: #8cced2;
      }
    }
  }
`;

const MotionClickOutsideOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  z-index: 997;
  display: flex;
  align-items: center;
  justify-content: center;
`;
