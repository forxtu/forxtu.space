import styled from "styled-components";
import { theme } from "styled-tools";

export const H1Title = styled.h1`
  font-size: ${theme("sizes.fonts.largeValuesPlus")};
  color: ${theme("colors.text.title")};
  margin: 12px 0;
`;

export const H3Title = styled.h3`
  font-size: ${theme("sizes.fonts.mediumValuesPlus")};
  color: ${theme("colors.text.title")};
`;

export const Title = styled.h4`
  font-size: ${theme("sizes.fonts.mediumValues")};
  color: ${theme("colors.text.title")};
`;
