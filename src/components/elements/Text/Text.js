import styled from "styled-components";
import { theme } from "styled-tools";

export const H1Title = styled.h1`
  font-size: ${theme("sizes.fonts.largeValuesPlus")};
  color: ${theme("colors.text.title")};
  margin: 12px 0;
`;

export const H2Title = styled.h2`
  font-size: ${theme("sizes.fonts.largeValues")};
  color: ${theme("colors.text.title")};
`;

export const H3Title = styled.h3`
  font-size: ${theme("sizes.fonts.mediumValuesPlus")};
  color: ${theme("colors.text.title")};
`;

export const H4Title = styled.h4`
  font-size: ${theme("sizes.fonts.mediumValues")};
  color: ${theme("colors.text.title")};
`;

export const H5Title = styled.h5`
  font-size: ${theme("sizes.fonts.defaultPlus")};
  color: ${theme("colors.text.title")};
`;

export const H6Title = styled.h6`
  font-size: ${theme("sizes.fonts.default")};
  color: ${theme("colors.text.title")};
`;
