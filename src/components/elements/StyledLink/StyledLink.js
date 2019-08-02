import React, { useContext } from "react";
import { string, node } from "prop-types";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Link } from "gatsby";

// utils
import { LanguageContext } from "components/layouts/Layout";

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

const StyledLink = ({ to, href, children }) => {
  const { language } = useContext(LanguageContext);

  return (
    <StyledLinkWrapper href={href} to={language === "ru" ? to : `en/${to}`}>
      {children}
    </StyledLinkWrapper>
  );
};

StyledLink.propTypes = {
  href: string.isRequired,
  to: string.isRequired,
  children: node.isRequired
};

export default StyledLink;
