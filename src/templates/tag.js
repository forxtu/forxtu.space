import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { FormattedMessage } from "gatsby-plugin-intl";
import { object } from "prop-types";

// utils
import { config } from "../../data";

// styles
import { PageTitle } from "styles/common/globalWrappers";

// components
import Card from "components/elements/Card";
import SEO from "components/helpers/SEO";

const StyledTag = styled.span`
  color: ${theme("colors.highlight")};
  padding: 0 20px;
`;

const TagPage = ({ data, pageContext }) => {
  const { edges } = data.allMarkdownRemark;
  const { tag } = pageContext;

  return (
    <Container>
      <Row>
        <Col>
          <PageTitle>
            <FormattedMessage
              defaultMessage="Статей с тегом"
              id="tags.single_tag_title"
            />
            <StyledTag>#{tag}</StyledTag> {edges.length}
          </PageTitle>
        </Col>
      </Row>

      {edges.map(({ node }) => (
        <Card {...node.frontmatter} key={node.id} />
      ))}

      <SEO
        title={tag}
        url={`${config.url}/tag/${tag}`}
        siteTitleAlt="Forxtu Blog"
        isPost={false}
        description={tag}
        image="https://www.ubackground.com/_ph/85/517668112.jpg"
      />
    </Container>
  );
};

export default TagPage;

TagPage.propTypes = {
  data: object,
  pageContext: object
};

export const pageQuery = graphql`
  query tagQuery($tag: [String!]) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { in: $tag } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            id
            url: slug
            title
            date
            tags
            headerImage
            description
          }
        }
      }
    }
  }
`;
