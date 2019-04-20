import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";

// styles
import { PageTitle } from "styles/common/globalWrappers";

// components
import Text from "components/elements/Text";
import Tag from "components/elements/Tag";
import SEO from "components/helpers/SEO";

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 205px);
`;

const StyledRow = styled(Row)`
  margin-left: 15px;
`;

const TagPage = ({ data }) => {
  const { allMarkdownRemark } = data;

  const mapping = {};

  allMarkdownRemark.edges.forEach(({ node }) => {
    const { tags } = node.frontmatter;
    tags.forEach(name => {
      if (mapping[name]) {
        mapping[name] += 1;
      } else {
        mapping[name] = 1;
      }
    });
  });

  const tags = Array.from(Object.keys(mapping)).sort(
    (b, a) => mapping[a] - mapping[b]
  );

  return (
    <StyledContainer>
      <Row>
        <Col>
          <PageTitle>
            Всего тегов: <b>{tags.length}</b>
          </PageTitle>
        </Col>
      </Row>

      <StyledRow>
        {tags.map(item => (
          <Text.H3Title>
            <Tag name={item} key={item} count={mapping[item]} />
          </Text.H3Title>
        ))}
      </StyledRow>

      <SEO
        title="Теги"
        url="/tags/"
        siteTitleAlt="Forxtu Blog"
        isPost={false}
        description="Страница тегов"
        image="https://i.imgur.com/M795H8A.jpg"
      />
    </StyledContainer>
  );
};

export default TagPage;

export const pageQuery = graphql`
  query getAllTags {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
