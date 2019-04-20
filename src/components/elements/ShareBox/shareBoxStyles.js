import styled, { css } from "styled-components";
import { theme, ifProp } from "styled-tools";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  z-index: 10;
  width: 100%;
  position: fixed;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.33s;

  ${ifProp(
    { isHidden: true },
    css`
      transform: translateY(65px);
    `
  )};

  background: ${theme("colors.shareBox.bg")};
`;
