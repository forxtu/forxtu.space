import React from "react";
import { string } from "prop-types";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Link } from "gatsby";

const StyledLinkWrapper = styled(Link)`
  color: ${theme("colors.header.navItem")};
  border-bottom: 3px solid transparent;

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
`;

const StyledLink = ({ to, href, children }) => (
  <StyledLinkWrapper href={href} to={to}>
    {children}
  </StyledLinkWrapper>
);

StyledLink.propTypes = {
  href: string.isRequired,
  to: string.isRequired
};

export default StyledLink;
