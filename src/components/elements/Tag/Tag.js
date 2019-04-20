import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "styled-tools";

const StyledTag = styled.a`
  color: ${theme("colors.text.default")};
  padding: 0 6px;

  &:hover {
    color: ${theme("colors.text.default")};
  }
`;

const Tag = ({ name, count }) => (
  <StyledTag href={`/tag/${name}`}>
    #{name}
    {count > 0 && <span> - ({count})</span>}
  </StyledTag>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Tag.defaultProps = {
  count: ""
};

export default Tag;
