import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { NavWrapper } from "./NavWrapper";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  {
    href:
      "https://www.dropbox.com/s/489bwk60sily689/ShelbyCollopy_Resume_2020.pdf?dl=0",
    label: "Resume",
  },
  { href: "https://linkedin.com/in/shelbycollopy", label: "LinkedIn" },
  { href: "https://github.com/shelbycollopy", label: "Github" },
  { href: "mailto:shelbycollopy@gmail.com", label: "Contact" },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <NavWrapper>
    <nav>
      <h2>
        <Link href="/">Shelby Collopy</Link>
      </h2>
      <ul>
        {links.map(({ key, href, label }) =>
          links.label === "Portfolio" ? (
            <li key={key}>
              <Link href={href}>{label}</Link>
            </li>
          ) : (
            <li key={key}>
              <a href={href}>{label}</a>
            </li>
          )
        )}
      </ul>
    </nav>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      :global(body) {
        margin: 0;
        font-family: "Open Sans", -apple-system, BlinkMacSystemFont, Avenir Next,
          Avenir, Helvetica, sans-serif;
        font-weight: 400;
        height: 100vh;
        background: #fff;
      }
      nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        max-width: 1024px;
        top: 0;
        padding-left: 16px;
        z-index: 10;
        height: auto;
        margin: 0 auto;
      }
      ul {
        display: flex;
        justify-content: center;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: green;
        text-decoration: none;
        font-size: 16px;
        font-weight: 300;
      }
      a:hover {
        color: limegreen;
        transition: 0.25s;
        text-decoration: underline;
      }
      h2 a {
        color: #000;
        font-size: 1.5rem;
        font-weight: 400;
      }
      @media (max-width: 600px) {
        h2 {
          margin-bottom: 0;
        }
        nav {
          text-align: center;
          flex-direction: column;
          position: relative;
          box-shadow: none;
        }
      }
      @media (prefers-color-scheme: dark) {
        :global(body) {
          background: #000;
        }

        h2 a {
          color: #fff;
        }
      }
    `}</style>
  </NavWrapper>
);

export default Nav;
