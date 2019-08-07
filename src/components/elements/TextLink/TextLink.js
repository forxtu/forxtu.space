import React from "react";
import { string, node, boolean } from "prop-types";
import styled, { css } from "styled-components";
import { theme, switchProp } from "styled-tools";
import { Link } from "gatsby";

// utils
import { translatedMessage } from "utils/helpers";

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

const TextLink = ({ to, href, children, underline, color }) => (
  <StyledLinkWrapper
    color={color}
    underline={underline}
    href={href}
    to={translatedMessage(to, `en/${to}`)}
  >
    {children}
  </StyledLinkWrapper>
);

TextLink.propTypes = {
  href: string,
  to: string.isRequired,
  children: node.isRequired,
  underline: boolean,
  color: string
};

TextLink.defaultProps = {
  underline: true,
  color: "link"
};

export default TextLink;
