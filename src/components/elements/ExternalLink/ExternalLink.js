import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "styled-tools";

const StyledA = styled.a`
  color: ${theme("colors.text.link")};

  &:hover {
    color: ${theme("colors.header.navItem")};
    text-decoration: underline;
  }
`;

const ExternalLink = ({ href, title, target, className, rel }) => (
  <StyledA href={href} rel={rel} target={target} className={className}>
    {title}
  </StyledA>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
  rel: PropTypes.string
};

ExternalLink.defaultProps = {
  target: "_blank",
  className: "",
  rel: "external nofollow noopener"
};

export default ExternalLink;
