import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// components
import Text from "components/elements/Text";
import TextLink from "components/elements/TextLink";

const Wrapper = styled.div`
  a {
    margin-bottom: 8px;
  }
`;

const LatestPost = ({ posts }) => (
  <Wrapper>
    <Text.Title>Последние статьи</Text.Title>
    {posts.map(({ node }) => (
      <TextLink
        to={node.frontmatter.url || node.frontmatter.slug || node.fields.slug}
        key={node.frontmatter.url || node.frontmatter.slug || node.fields.slug}
        href={node.frontmatter.url || node.frontmatter.slug || node.fields.slug}
      >
        {node.frontmatter.title}
      </TextLink>
    ))}
  </Wrapper>
);

LatestPost.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LatestPost;
