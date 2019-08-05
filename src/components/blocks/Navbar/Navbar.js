import React from "react";
import ReactGA from "react-ga";
import { Container } from "styled-bootstrap-grid";
import { string } from "prop-types";

// utils
import { gotoPage } from "api/url";
import { config } from "../../../../data";

// styles
import * as S from "./navbarStyles";

// components
import GithubCorner from "components/elements/GithubCorner";
import ThemeToggler from "components/elements/ThemeToggler";
import LanguageToggler from "components/elements/LanguageToggler";
import NavItem from "components/blocks/Navbar/NavItem";

const { navbarList = [] } = config;

const NavbarClass = ["navbar", "navbar-expand-md", "sticky-top"];

const Navbar = ({ language }) => (
  <S.NavbarWrapper
    id="m-navbar"
    className={`${NavbarClass.join(" ")} navbar-night`}
  >
    <Container className="container">
      <S.NavbarBrand
        className="btn btn-default"
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Click navbar logo"
          });
          gotoPage(`${language === "ru" ? "/" : "/en/"}`);
        }}
      >
        <S.BrandLogo className="brand-logo">FORXTU</S.BrandLogo>
      </S.NavbarBrand>
      <GithubCorner url="https://github.com/forxtu/forxtu.space" />
      <S.MenuWrapper>
        <S.NavbarToggler
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span role="img" aria-label="burger menu">
            🍔
          </span>
        </S.NavbarToggler>
        <S.CollapsedMenuWrapper
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarSupportedContent"
        >
          <S.CollapsedMenuUl className="mr-2">
            {navbarList.map(({ href, title, list }) => (
              <NavItem href={href} list={list} title={title} />
            ))}
          </S.CollapsedMenuUl>
        </S.CollapsedMenuWrapper>
        <S.ThemeTogglerWrapper>
          <ThemeToggler />
        </S.ThemeTogglerWrapper>
        <LanguageToggler />
      </S.MenuWrapper>
    </Container>
  </S.NavbarWrapper>
);

Navbar.propTypes = {
  language: string.isRequired
};

export default Navbar;
