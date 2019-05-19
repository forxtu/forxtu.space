import React from "react";
import { graphql } from "gatsby";
import { object } from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";

// hooks
import useGetTags from "src/hooks/useGetTags";

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
  const { tags, mapping } = useGetTags(data.allMarkdownRemark);

  return (
    <StyledContainer>
      <Row>
        <Col>
          <PageTitle>

            Всего тегов:
            <b>{tags.length}</b>
          </PageTitle>
        </Col>
      </Row>

      <StyledRow>
        {tags.map(tag => (
          <Text.H3Title key={tag}>
            <Tag name={tag} key={tag} count={mapping[tag]} />
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

TagPage.propTypes = {
  data: object.isRequired
};

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
