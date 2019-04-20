import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import ReactGA from "react-ga";
import styled from "styled-components";
import { theme } from "styled-tools";

// utils
import { gotoPage } from "api/url";

// components
import Dropdown from "./Dropdown";

const StyledLink = styled(Link)`
  color: ${theme("colors.header.navItem")};
  border-bottom: 3px solid transparent;

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin: 6px 18px 0 18px;
    }

    &:last-child {
      margin: 6px 0 0 0;
    }
    &:hover {
      color: ${theme("colors.header.navItem")};
      text-decoration: none;
      border-bottom: 3px solid ${theme("colors.highlight")};
    }
  }
`;

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
