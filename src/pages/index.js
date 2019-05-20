import React from "react";
import { graphql } from "gatsby";
import { object } from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";

// components
import Card from "components/elements/Card";
import ShareBox from "components/elements/ShareBox";
import Sidebar from "components/blocks/Sidebar";
import Subscribe from "components/blocks/Subscribe";

// styles
import { StickyWrapper } from "styles/common/utils";

const StyledRow = styled(Row)`
  margin-top: 20px;
`;

const Page = ({ data, location }) => {
  const { totalCount, edges } = data.latestPosts;
  return (
    <Container>
      <StyledRow>
        <div id="header" />
        <Col xl={3} lg={3} md={12} xs={12}>
          <Sidebar totalCount={totalCount} posts={edges} post />
        </Col>
        <Col xl={6} lg={6} md={12} xs={12}>
          {data.content.edges.map(({ node }) => (
            <Card {...node.frontmatter} key={node.fields.slug} />
          ))}
        </Col>
        <ShareBox url={location.href} hasCommentBox={false} />
        <Col xl={3} lg={3} order={3}>
          <StickyWrapper>
            <Subscribe />
          </StickyWrapper>
        </Col>
      </StyledRow>
    </Container>
  );
};

export default Page;

Page.propTypes = {
  data: object.isRequired,
  location: object.isRequired
};

export const pageQuery = graphql`
  fragment cardData on MarkdownRemark {
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
  query BlogQuery {
    content: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          ...cardData
        }

        previous {
          ...cardData
        }

        next {
          ...cardData
        }
      }
    }

    latestPosts: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 6
    ) {
      totalCount
      edges {
        node {
          ...cardData
        }
      }
    }
  }
`;
