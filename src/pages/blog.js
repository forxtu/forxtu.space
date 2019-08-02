import React from "react";
import { object } from "prop-types";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import { theme, ifProp } from "styled-tools";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

// hooks
import useFilteredPosts from "src/hooks/useFilteredPosts";
import useGetTags from "src/hooks/useGetTags";

// components
import Card from "components/elements/Card";
import Text from "components/elements/Text";
import { Input } from "components/elements/Form";
import ShareBox from "components/elements/ShareBox";
import CardWrapper from "components/elements/CardWrapper";
import Subscribe from "components/blocks/Subscribe";

// styles
import { StickyWrapper } from "styles/common/utils";

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 205px);
`;

const StyledRow = styled(Row)`
  margin-top: 20px;
`;

const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
`;

const FilterCount = styled.span`
  padding: 10px 20px !important;
  color: ${theme("colors.highlight")};
  font-weight: 700;
`;

const TagElement = styled.div`
  cursor: pointer;
  color: ${theme("colors.text.link")};
  ${ifProp(
    { active: true },
    css`
      color: ${theme("colors.highlight")};
      text-decoration: underline;
    `
  )};
`;

const BlogPage = ({ data, location, intl }) => {
  const {
    searchTerm,
    filteredPosts,
    handleChange,
    currentTags,
    updateTags
  } = useFilteredPosts(data);
  const { tags } = useGetTags(data.posts);

  return (
    <StyledContainer>
      <div id="header" />
      <StyledRow>
        <Col>
          <Text.H1Title>
            <FormattedMessage defaultMessage="Статьи" id="blog.title" />
            <FilterCount>{filteredPosts.length}</FilterCount>
          </Text.H1Title>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col xl={3} lg={3} md={12} xs={12}>
          <StickyWrapper>
            <CardWrapper boxShadow={theme("colors.highlight")}>
              {tags.map(tag => {
                const active = currentTags.includes(tag);

                return (
                  <TagElement
                    active={active}
                    key={tag}
                    onClick={() => {
                      updateTags(tag);
                    }}
                  >
                    #{tag}
                  </TagElement>
                );
              })}
            </CardWrapper>
          </StickyWrapper>
        </Col>
        <Col xl={6} lg={6} md={12} xs={12}>
          <SearchWrapper>
            <Input
              className="search"
              type="text"
              name="searchTerm"
              value={searchTerm}
              placeholder={intl.formatMessage({
                defaultMessage: "Введите название статьи...",
                id: "blog_search_placeholder"
              })}
              onChange={handleChange}
            />
          </SearchWrapper>
          {filteredPosts.length > 0 ? (
            filteredPosts.map(({ node }) => (
              <Card {...node.frontmatter} key={node.fields.slug} />
            ))
          ) : (
            <Text.H3Title>
              <br />
              {`Статьи по запросу ${
                searchTerm !== "" ? searchTerm : ""
              } не найдены`}
              😥
            </Text.H3Title>
          )}
        </Col>
        <Col xl={3} lg={3} order={3}>
          <StickyWrapper>
            <Subscribe />
          </StickyWrapper>
        </Col>
        <ShareBox url={location.href} hasCommentBox={false} />
      </StyledRow>
    </StyledContainer>
  );
};

export default injectIntl(BlogPage);

BlogPage.propTypes = {
  data: object.isRequired,
  location: object.isRequired
};

export const pageQuery = graphql`
  query getAllPosts {
    posts: allMarkdownRemark(
      limit: 2000
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            id
            title
            url: slug
            date
            tags
            description
            headerImage
          }
        }
      }
    }
  }
`;
