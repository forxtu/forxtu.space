import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "styled-tools";

// components
import TextLink from "components/elements/TextLink";

const StyledTag = styled.span`
  color: ${theme("colors.text.default")};
  padding: 0 6px;

  &:hover {
    color: ${theme("colors.text.default")};
  }
`;

const Tag = ({ name, count }) => (
  <TextLink
    color="default"
    to={`/tag/${name.toLowerCase()}/`}
    href={`/tag/${name.toLowerCase()}/`}
  >
    <StyledTag>
      #{name}
      {count > 0 && <span> - ({count})</span>}
    </StyledTag>
  </TextLink>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Tag.defaultProps = {
  count: ""
};

export default Tag;
