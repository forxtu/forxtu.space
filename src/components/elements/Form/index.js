import styled from "styled-components";
import { theme } from "styled-tools";

export const Input = styled.input`
  margin: 0;
  padding: 6px 12px;
  width: 100%;
  background: ${theme("colors.card.bg")};
  border: 1px solid ${theme("colors.form.border")};
  color: ${theme("colors.text.default")};
  transition: 0.2s;
  margin: 6px 0;

  &:focus {
    outline: none;
    box-shadow: 2px 2px ${theme("colors.form.boxShadow")};
  }
`;
