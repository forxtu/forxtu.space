import React from "react";
import { string } from "prop-types";

// utils
import { parseImgur } from "api/images";

// styles
import * as S from "./headerStyles";

const Header = ({ img, title, subTitle, authorImage, authorName }) => (
  <S.HeaderWrapper md={12} id="header">
    <S.ImageContainer img={img}>
      {title && <S.UTitle>{title}</S.UTitle>}
      {subTitle && (
        <S.USubTitle>
          <S.MLeft>
            {authorImage && (
              <S.AuthorImage
                src={parseImgur(authorImage, "small-square")}
                alt={authorName}
              />
            )}
            <S.AuthorName>{authorName}</S.AuthorName>
          </S.MLeft>
          <S.Text>{subTitle}</S.Text>
        </S.USubTitle>
      )}
    </S.ImageContainer>
  </S.HeaderWrapper>
);

Header.propTypes = {
  img: string.isRequired,
  title: string,
  subTitle: string,
  authorName: string,
  authorImage: string
};

Header.defaultProps = {
  title: "",
  subTitle: "",
  authorName: "",
  authorImage: ""
};

export default Header;
