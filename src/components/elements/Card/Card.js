import React from "react";
import { Link } from "gatsby";
import { string, arrayOf } from "prop-types";

// utils
import { parseImgur } from "api/images";

// styles
import {
  Wrapper,
  CustomCard,
  Data,
  Content,
  Stats,
  Date,
  StyledTitle,
  Title,
  Description
} from "./cardStyles";

// components
import Tag from "components/elements/Tag";
import StyledLink from "components/elements/StyledLink";

const imageStyle = (headerImage, color) => ({
  backgroundColor: `#${color}`,
  backgroundImage: ` url(${parseImgur(headerImage, "large")})`
});

const CardHeader = ({ url, image, backgroundColor }) => (
  <Link to={url} href={url}>
    <Wrapper style={imageStyle(image, backgroundColor)} />
  </Link>
);

const Card = ({
  title,
  date,
  url,
  headerImage,
  headerBackgroundColor,
  description,
  tags
}) => (
  <div className="col-sm-12 pb-4">
    <CustomCard>
      {headerImage && (
        <CardHeader
          url={url}
          image={headerImage}
          backgroundColor={headerBackgroundColor}
        />
      )}
      <Data>
        <Content>
          <Stats>
            <Date>{date.split("T")[0]}</Date>
            {tags.map(name => (
              <Tag name={name} key={name} />
            ))}
          </Stats>
          <StyledTitle to={url} href={url}>
            <Title>{title}</Title>
          </StyledTitle>
          <Description>{description}</Description>
          <StyledLink to={url} href={url}>
            Читать далее
          </StyledLink>
        </Content>
      </Data>
    </CustomCard>
  </div>
);

Card.propTypes = {
  title: string.isRequired,
  date: string,
  url: string.isRequired,
  headerImage: string,
  headerBackgroundColor: string,
  description: string.isRequired,
  tags: arrayOf(string)
};

CardHeader.propTypes = Card.propTypes;

Card.defaultProps = {
  headerImage: "",
  tags: [],
  date: "",
  headerBackgroundColor: ""
};

export default Card;
