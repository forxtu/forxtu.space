import React from "react";
import styled from "styled-components";

// utils
import { parseImgur } from "api/images";

const StyledImg = styled.img`
  max-height: 15em;
`;

const Image = ({ href, title, text }) => (
  <StyledImg
    className="lozad mb-3 align-self-center"
    data-src={parseImgur(href, "large")}
    title={title || text}
    alt={title || text}
  />
);

export default Image;
