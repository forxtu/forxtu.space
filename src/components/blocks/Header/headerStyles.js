import styled from "styled-components";
import { theme } from "styled-tools";
import { Col } from "styled-bootstrap-grid";

export const UTitle = styled.h1``;
export const USubTitle = styled.div``;
export const MLeft = styled.div``;
export const AuthorImage = styled.img``;
export const AuthorName = styled.span``;
export const Text = styled.span``;

export const HeaderWrapper = styled(Col)`
  padding: 0;
`;

export const ImageContainer = styled.div`
  background-image: ${({
    img
  }) => `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${img})`};
  margin-top: -58;

  @media (min-width: 768px) {
    min-height: 500px;
  }

  @media (max-width: 767.98px) {
    background-size: cover;
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;

  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 58px;
  padding-left: 0.8125rem;
  padding-right: 0.8125rem;
  padding-bottom: 0.8125rem;

  ${UTitle} {
    margin: 0 0 0.75rem;
    font-size: 1.5rem;
    line-height: 1.875rem;
    color: ${theme("colors.postHeader.titleColor")};
    background: ${theme("colors.postHeader.titleBg")};
    padding: 5px;
  }

  ${USubTitle} {
    color: white;
  }

  ${AuthorImage} {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  ${AuthorName} {
    margin-right: 0.5rem;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    ${UTitle} {
      padding-top: 1.5rem;
    }

    ${USubTitle} {
      display: flex;
      align-self: flex-end;
      justify-content: center;

      font-size: 0.75rem;
      line-height: 1.2rem;
      height: 1.2rem;
      width: 100%;

      ${MLeft} {
        margin-right: auto;
      }

      ${Text} {
        margin-right: 0.5rem;
      }
    }
  }

  // For Tablet
  @media (min-width: 768px) {
    justify-content: center;
  }

  // For PC
  @media (min-width: 992px) {
    .u-subtitle {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .u-subtitle {
      width: auto;
      align-self: center;
    }
  }

  .tag {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
