import React from "react";
import { Link } from "gatsby";
import { string, arrayOf } from "prop-types";

// styles
import {
  Wrapper,
  CardWrapper,
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

const CardHeader = ({ url, image, backgroundColor }) => (
  <Link to={url} href={url}>
    <Wrapper headerImage={image} color={backgroundColor} />
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
  <CardWrapper>
    <CustomCard>
      {headerImage && (
        <CardHeader
          url={`${url}/`}
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
          <StyledTitle to={`${url}/`} href={`${url}/`}>
            <Title>{title}</Title>
          </StyledTitle>
          <Description>{description}</Description>
          <StyledLink to={`${url}/`} href={`${url}/`}>
            Читать далее
          </StyledLink>
        </Content>
      </Data>
    </CustomCard>
  </CardWrapper>
);

Card.propTypes = {
  title: string,
  date: string,
  url: string,
  headerImage: string,
  headerBackgroundColor: string,
  description: string,
  tags: arrayOf(string)
};

CardHeader.propTypes = Card.propTypes;

Card.defaultProps = {
  title: "",
  url: "",
  description: "",
  headerImage: "",
  tags: [],
  date: "",
  headerBackgroundColor: ""
};

export default Card;
