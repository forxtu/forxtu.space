import styled from "styled-components";
import { theme } from "styled-tools";
import { Link } from "gatsby";

export const About = styled.div``;
export const Avatar = styled.img``;
export const Description = styled.p``;
export const AvatarBlock = styled.div``;
export const StyledHeader = styled.header`
  background: ${theme("colors.sidebar.bg")};
  padding: 0 15px 15px 15px;
  box-shadow: 2px 2px 0px 0 ${theme("colors.sidebar.boxShadow")};
  border: 1px solid ${theme("colors.sidebar.border")};
  text-align: center;
  @media (max-width: 992px) {
    margin: 15px 0;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
  margin-left: auto;

  ${About} {
    ${Avatar} {
      margin: 1rem;
      border-radius: 50%;
      height: 120px;
      width: 120px;
      transition: transform 0.5s;

      &:hover {
        transform: scale(1.2);
      }
    }
    ${AvatarBlock} {
      color: ${theme("colors.text.title")};
      font-size: ${theme("sizes.fonts.largeValuesPlus")};
    }
    ${Description} {
      color: ${theme("colors.sidebar.text")};
    }
  }
`;

export const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;
