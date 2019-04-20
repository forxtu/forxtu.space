import styled from "styled-components";
import { theme } from "styled-tools";

const IconLink = styled.a`
  margin: 15px;
  font-size: ${theme("sizes.fonts.largeValues")};

  &:hover {
    text-decoration: none;
  }
`;

export default IconLink;
