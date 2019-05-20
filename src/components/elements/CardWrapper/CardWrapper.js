import styled from "styled-components";
import { theme } from "styled-tools";

const CardWrapper = styled.div`
  background: ${theme("colors.card.bg")};
  box-shadow: 2px 2px 0px 0
    ${({ boxShadow }) => (boxShadow || theme("colors.card.boxShadow"))};
  transition: 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  border: 1px solid ${theme("colors.card.border")};
  padding: 12px;
`;

export default CardWrapper;
