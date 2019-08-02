import React from "react";
import PropTypes from "prop-types";
import ReactGA from "react-ga";

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
            action: `Click nav-menu: ${name}`
          });
          gotoPage(url);
        }}
      >
        {name}
      </StyledLink>
    );
  }

  return <Dropdown title={name} list={list} />;
};

NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string
    })
  )
};

NavItem.defaultProps = {
  list: []
};

export default NavItem;
