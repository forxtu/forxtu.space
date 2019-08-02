import React, { useContext } from "react";
import { string, node } from "prop-types";
import styled, { css } from "styled-components";
import { theme, switchProp } from "styled-tools";
import { Link } from "gatsby";

// utils
import { LanguageContext } from "components/layouts/Layout";

const StyledLinkWrapper = styled(Link)`
  color: ${theme("colors.text.link")};

  &:hover {
    ${switchProp("color", {
    default: css`
        color: ${theme("colors.text.default")};
      `,
    link: css`
        color: ${theme("colors.text.link")};
      `
  })};

    text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  }
`;

const TextLink = ({ to, href, children, underline, color }) => {
  const { language } = useContext(LanguageContext);

  return (
    <StyledLinkWrapper
      color={color}
      underline={underline}
      href={href}
      to={language === "ru" ? to : `en/${to}`}
    >
      {children}
    </StyledLinkWrapper>
  );
};

TextLink.propTypes = {
  href: string.isRequired,
  to: string.isRequired,
  children: node.isRequired,
  underline: string,
  color: string
};

TextLink.defaultProps = {
  underline: true,
  color: "link"
};

export default TextLink;
