import styled from "styled-components";
import { Col } from "styled-bootstrap-grid";
import { theme } from "styled-tools";

export const Ul = styled.ul``;

export const Wrapper = styled(Col)`
  list-style: none;
  padding-left: 12px;
  ${Ul} {
    box-shadow: 5px 5px 0px 0 ${theme("colors.card.boxShadow")};
    transition: 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
    border: 1px solid ${theme("colors.card.border")};
    position: sticky;
    top: 70px;
    padding: 15px;
    ul {
      padding-left: 8px;
      li {
        list-style-type: none;

        p {
          margin-bottom: 0;
        }

        a {
          color: ${theme("colors.text.link")};
          font-size: ${theme("sizes.fonts.defaultPlus")};

          &:hover {
            color: lighten(${theme("colors.text.link")}, 10%);
          }
        }
      }
    }
  }
`;
