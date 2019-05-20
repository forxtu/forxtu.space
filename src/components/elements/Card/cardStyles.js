import styled from "styled-components";
import { theme } from "styled-tools";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  background-color: ${({ color }) => color};
  background-image: url(${({ headerImage }) => headerImage});
  background-position: center;
  @media (min-width: 576px) {
    min-height: 15rem;
  }
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 5.7rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease 0s;

  &:hover {
    opacity: 0.7;

    .data {
      transform: translateY(-1em);
      transition: transform 0.3s;
    }
  }
`;

export const CustomCard = styled.div`
  background: ${theme("colors.card.bg")};
  box-shadow: 2px 2px 0px 0 ${theme("colors.card.boxShadow")};
  transition: 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  border: 1px solid ${theme("colors.card.border")};

  &:hover {
    box-shadow: 0 1px 0 0 ${theme("colors.card.boxShadow")};
    transform: translateY(-5px);
  }
`;

export const Date = styled.span`
  margin-right: 20px;
  border-bottom: 3px solid ${theme("colors.highlight")};
  color: ${theme("colors.text.default")};
`;

export const CardWrapper = styled.div`
  padding-bottom: 20px;
`;

export const Content = styled.div``;
export const Stats = styled.div``;
export const Title = styled.h4``;
export const Description = styled.p``;

export const Data = styled.div`
  transform: translateY(0);
  transition: transform 0.3s;

  ${Content} {
    padding: 1em;
    position: relative;
    z-index: 1;

    ${Stats} {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    ${Title} {
      margin-top: 20px;
      color: ${theme("colors.text.title")};
    }

    ${Description} {
      color: ${theme("colors.text.default")};
    }
  }
`;

export const StyledTitle = styled(Link)`
  color: ${theme("colors.text.title")};
  &:hover {
    text-decoration: none;
  }
`;

export const StyledLink = styled(Link)`
  color: ${theme("colors.text.link")};
`;
