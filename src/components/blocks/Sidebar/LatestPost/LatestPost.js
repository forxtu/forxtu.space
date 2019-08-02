import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "gatsby-plugin-intl";

// components
import Text from "components/elements/Text";
import TextLink from "components/elements/TextLink";

const Wrapper = styled.div`
  a {
    margin-bottom: 8px;
  }
`;

const toLower = urlVal => urlVal && `${urlVal.toLowerCase()}/`;

const LatestPost = ({ posts }) => (
  <Wrapper>
    <Text.Title>
      <FormattedMessage
        defaultMessage="Последние статьи"
        id="sidebar.last_articles"
      />
    </Text.Title>
    {posts.map(
      ({
        node: {
          fields: { slug: fieldsSlug }
        },
        node: {
          frontmatter: { url, slug, title }
        }
      }) => (
        <TextLink
          to={toLower(url) || toLower(slug) || toLower(fieldsSlug)}
          key={toLower(url) || toLower(slug) || toLower(fieldsSlug)}
          href={toLower(url) || toLower(slug) || toLower(fieldsSlug)}
        >
          {title}
        </TextLink>
      )
    )}
  </Wrapper>
);

LatestPost.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LatestPost;
