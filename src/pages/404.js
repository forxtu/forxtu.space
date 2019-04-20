import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "styled-bootstrap-grid";

// components
import Text from "components/elements/Text";
import TextLink from "components/elements/TextLink";

const NotFoundPage = ({ data }) => (
  <Container>
    <Row>
      <Col>
        <Text.H1Title>Страница, которую вы ищите, не найдена</Text.H1Title>
        <Text.H3Title>Возможно вы искали:</Text.H3Title>
        {data.allSitePage.edges.map(page => (
          <TextLink
            to={page.node.path}
            href={page.node.path}
            key={page.node.path}
          >
            <li>{page.node.path}</li>
          </TextLink>
        ))}
      </Col>
    </Row>
  </Container>
);

export const pageQuery = graphql`
  query getAllPages {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;

export default NotFoundPage;
