"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import styles from "./header.module.css";
function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className="logo">
          <Image src="/images/kootenay-mediation-logo.svg" alt="Kootenay Mediation Logo" width={350} height={100} priority />
        </div>
        <ul className={styles.navitems}>
          <li>
            <a href="#">Section 1</a>
          </li>
          <li>
            <a href="#">Section 2</a>
          </li>
          <li>
            <a href="#">Section 3</a>
          </li>
          <li>
            <a href="#">Book an Appointment</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const HeaderStyled = styled.header`
  nav {
    padding: 2rem 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
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

  .header-content {
    padding: 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);

      img {
        border-radius: 8px;
      }
    }
  }
`;

export default Header;
