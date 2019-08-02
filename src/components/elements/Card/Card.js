import React from "react";
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
import TextLink from "components/elements/TextLink";

const CardHeader = ({ url, image, backgroundColor }) => (
  <StyledLink to={url} href={url}>
    <Wrapper headerImage={image} color={backgroundColor} />
  </StyledLink>
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
          <TextLink to={`${url}/`} href={`${url}/`} underline={false}>
            <StyledTitle>
              <Title>{title}</Title>
            </StyledTitle>
          </TextLink>
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
