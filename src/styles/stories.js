import styled from "styled-components";
import { theme } from "styled-tools";

export const CardWrapper = styled.div`
  background-color: ${theme("colors.card.bg")};
  height: calc(100vh - 20px);
`;

export const FontWrapper = styled.div`
  font-family: "Didact Gothic", sans-serif !important;
  font-weight: 600 !important;
`;
