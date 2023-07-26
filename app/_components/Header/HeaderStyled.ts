"use client";
import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  background-color: #eaf2ef;
  nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: 1024px) {
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
      color: #486f70 /*#548285*/;
      li:last-child {
        margin-left: 2rem;
      }
      li {
        transition: all 0.2s ease-in-out;
        margin-right: 1.25rem;
        &:hover {
          color: #8cced2;
        }
        a,
        button {
          font-size: 0.95rem;
        }
        a.appointment-button {
          padding: 0.6rem 1.25rem;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #3d5664;
          background: var(--color-button-bg);
          &:hover {
            background-color: var(--color-button-hover);
            color: white;
          }
        }
      }
    }
  }
`;
