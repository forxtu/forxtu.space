import React from "react";
import { string, arrayOf, shape, objectOf } from "prop-types";
import ReactGA from "react-ga";

// utils
import { gotoPage } from "api/url";
import { translatedMessage } from "utils/helpers";

// components
import Dropdown from "./Dropdown";
import StyledLink from "components/elements/StyledLink";

const NavItem = ({ href, title, list }) => (
  <>
    {list.length === 0 ? (
      <StyledLink
        href={href}
        to={href}
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: `Click nav-menu: ${translatedMessage(title.ru, title.en)}`
          });
          gotoPage(href);
        }}
      >
        {translatedMessage(title.ru, title.en)}
      </StyledLink>
    ) : (
      <Dropdown title={translatedMessage(title.ru, title.en)} list={list} />
    )}
  </>
);

NavItem.propTypes = {
  title: objectOf(
    shape({
      ru: string,
      en: string
    })
  ),
  href: string,
  list: arrayOf(
    shape({
      title: string,
      href: string
    })
  )
};

NavItem.defaultProps = {
  list: []
};

export default NavItem;
