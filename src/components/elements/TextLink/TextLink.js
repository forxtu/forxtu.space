import React from "react";
import { string } from "prop-types";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Link } from "gatsby";

const StyledLinkWrapper = styled(Link)`
  color: ${theme("colors.text.link")};

  &:hover {
    color: ${theme("colors.text.link")};
    text-decoration: underline;
  }
`;

const TextLink = ({ to, href, children }) => (
  <StyledLinkWrapper href={href} to={to}>
    {children}
  </StyledLinkWrapper>
);

TextLink.propTypes = {
  href: string.isRequired,
  to: string.isRequired
};

export default TextLink;
