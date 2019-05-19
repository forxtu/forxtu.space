import styled, { css } from "styled-components";
import { theme, ifProp } from "styled-tools";

const Button = styled.button`
  color: ${theme("colors.button.text")};
  border: 1px solid ${theme("colors.button.border")};
  background: ${theme("colors.button.bg")};
  cursor: pointer;
  padding: 6px 12px;

  &:focus {
    outline: none;
  }

  ${ifProp(
    { inverted: true },
    css`
      color: ${theme("colors.button.inverted.text")};
      border: 1px solid ${theme("colors.button.inverted.border")};
      background: ${theme("colors.button.inverted.bg")};
    `
  )};
`;

export default Button;
