import React from "react";
import PropTypes from "prop-types";

// styles
import { Wrapper, Ul } from "./tableOfContentStyles";

const TableOfContent = ({ __html }) => (
  <Wrapper>
    <Ul>
      <div dangerouslySetInnerHTML={{ __html }} />
    </Ul>
  </Wrapper>
);

TableOfContent.propTypes = {
  __html: PropTypes.string.isRequired
};

export default TableOfContent;
