import React from "react";
import PropTypes from "prop-types";

// styles
import { Wrapper, Ul } from "./tableOfContentStyles";

const TableOfContent = ({ __html }) => (
  <Wrapper lg={2} md={2} className="d-none d-lg-block order-11">
    <Ul>
      <div dangerouslySetInnerHTML={{ __html }} />
    </Ul>
  </Wrapper>
);

TableOfContent.propTypes = {
  __html: PropTypes.string.isRequired
};

export default TableOfContent;
