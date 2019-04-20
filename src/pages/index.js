import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Row, Col } from "styled-bootstrap-grid";

// components
import Card from "components/elements/Card";
import ShareBox from "components/elements/ShareBox";
import Sidebar from "components/blocks/Sidebar";

const StyledRow = styled(Row)`
  margin-top: 20px;
`;

const Page = ({ data, location }) => {
  const { totalCount, edges } = data.latestPosts;
  return (
    <StyledRow className="homepage">
      <div id="header" />
      <Sidebar totalCount={totalCount} posts={edges} post />
      <Col xl={6} lg={7} md={12} xs={12} order={2}>
        {data.content.edges.map(({ node }) => (
          <Card {...node.frontmatter} key={node.fields.slug} />
        ))}
      </Col>
      <Col xl={2} lg={1} order={3} />
      <ShareBox url={location.href} hasCommentBox={false} />
    </StyledRow>
  );
};

export default Page;

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
