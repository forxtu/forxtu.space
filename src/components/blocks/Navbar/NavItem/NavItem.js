import React from "react";
import { string, arrayOf, shape } from "prop-types";
import ReactGA from "react-ga";
import { FormattedMessage } from "gatsby-plugin-intl";

// utils
import { gotoPage } from "api/url";

// components
import Dropdown from "./Dropdown";
import StyledLink from "components/elements/StyledLink";

const NavItem = ({ url, name, list }) => {
  if (list.length === 0) {
    return (
      <StyledLink
        href={url}
        to={url}
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: `Click nav-menu: ${name.defaultMessage}`
          });
          gotoPage(url);
        }}
      >
        <FormattedMessage {...name} />
      </StyledLink>
    );
  }

  return <Dropdown title={name} list={list} />;
};

NavItem.propTypes = {
  url: string.isRequired,
  name: string.isRequired,
  id: string.isRequired,
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
