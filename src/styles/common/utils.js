import styled from "styled-components";

export const StickyWrapper = styled.div`
  position: sticky;
  top: 70px;
  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
