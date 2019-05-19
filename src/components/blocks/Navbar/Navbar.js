import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga";
import { Container } from "styled-bootstrap-grid";

// utils
import { gotoPage } from "api/url";
import { config } from "../../../../data";

// styles
import * as S from "./navbarStyles";

// components
import GithubCorner from "components/elements/GithubCorner";
import ThemeToggler from "components/elements/ThemeToggler";
import NavItem from "components/blocks/Navbar/NavItem";

const { navbarList = [] } = config;

const NavbarClass = ["navbar", "navbar-expand-md", "sticky-top"];

const Navbar = () => (
  <S.NavbarWrapper
    id="m-navbar"
    className={`${NavbarClass.join(" ")} navbar-night`}
  >
    <Container className="container">
      <S.NavbarBrand
        type="button"
        className="btn btn-default"
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Click navbar logo"
          });
          gotoPage("/");
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
          <FontAwesomeIcon icon={faBars} />
        </S.NavbarToggler>
        <S.CollapsedMenuWrapper
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarSupportedContent"
        >
          <S.CollapsedMenuUl className="navbar-nav mr-2">
            {navbarList.map(item => (
              <NavItem
                url={item.href}
                name={item.title}
                list={item.list}
                key={item.href}
              />
            ))}
          </S.CollapsedMenuUl>
        </S.CollapsedMenuWrapper>
        <ThemeToggler />
      </S.MenuWrapper>
    </Container>
  </S.NavbarWrapper>
);

export default Navbar;
