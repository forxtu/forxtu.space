import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { object } from "prop-types";
import { Container, Col, Row } from "styled-bootstrap-grid";
import { FormattedMessage } from "gatsby-plugin-intl";

// hooks
import { useTheme } from "src/ThemeContext";

// utils
import { parseChineseDate } from "api";
import { config } from "../../data";

// styles
import "gitalk/dist/gitalk.css";
import * as S from "styles/common/blogPostStyles";

// components
import Sidebar from "components/blocks/Sidebar";
import Content from "components/blocks/Content";
import SEO from "components/helpers/SEO";
import Header from "components/blocks/Header";
import TableOfContent from "components/blocks/TableOfContent";
import ShareBox from "components/elements/ShareBox";
import TextLink from "components/elements/TextLink";

const { name, iconUrl, gitalk } = config;

// Prevent webpack window problem
const isBrowser = typeof window !== "undefined";
const Gitalk = isBrowser ? require("gitalk") : undefined;

// Parse url
const getURL = node => node.frontmatter.slug || node.fields.slug;

const BlogPost = ({ data }) => {
  const themeState = useTheme();

  useEffect(() => {
    const { frontmatter, id: graphqlId } = data.content.edges[0].node;
    const { title, id } = frontmatter;

    const GitTalkInstance = new Gitalk({
      ...gitalk,
      title,
      id: id || graphqlId
    });
    GitTalkInstance.render("gitalk-container");
  }, []);

  const { previous, node, next } = data.content.edges[0];
  const { html, frontmatter, fields, excerpt, tableOfContents } = node;
  const { slug } = fields;
  const { date, headerImage, title } = frontmatter;
  const { totalCount, edges } = data.latestPosts;

  const defaultPostHeaderImage = themeState.dark
    ? "https://i.pinimg.com/originals/c6/3f/2a/c63f2a519558e22acc57db6764fb9c01.jpg"
    : "https://www.ubackground.com/_ph/85/517668112.jpg";

  return (
    <Container fluid>
      <Row>
        <Header
          img={headerImage || defaultPostHeaderImage}
          title={title}
          authorName={name}
          authorImage={iconUrl}
          subTitle={parseChineseDate(date)}
        />
      </Row>
      <S.PostWrapper className="post">
        <Col xl={3} lg={3} md={12} sm={12} order={1}>
          <Sidebar totalCount={totalCount} posts={edges} post />
        </Col>
        <S.ContentWrapper xl={6} lg={6} md={12} sm={12} order={2}>
          <Content post={html} />
          {previous || next ? (
            <S.SuggestionWrapper>
              <S.SuggestionTitle>
                <FormattedMessage
                  defaultMessage="Возможно вам понравится"
                  id="blog.suggestion"
                />
              </S.SuggestionTitle>
              {previous && (
                <TextLink to={getURL(previous)}>
                  {previous.frontmatter.title}
                </TextLink>
              )}
              <br />
              {next && (
                <TextLink to={getURL(next)}>{next.frontmatter.title}</TextLink>
              )}
            </S.SuggestionWrapper>
          ) : null}
          <S.GitalkContainer id="gitalk-container" />
        </S.ContentWrapper>
        <Col xl={3} lg={3} md={12} sm={12} order={3}>
          {tableOfContents && <TableOfContent __html={tableOfContents} />}
        </Col>

        <ShareBox url={slug} />

        <SEO
          title={title}
          url={`${config.url}/${slug}`}
          siteTitleAlt="FX2 Blog"
          isPost
          description={excerpt}
          image={headerImage || defaultPostHeaderImage}
        />
      </S.PostWrapper>
    </Container>
  );
};

BlogPost.propTypes = {
  data: object.isRequired
};

export const pageQuery = graphql`
  fragment post on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      id
      title
      slug
      date
      headerImage
    }
  }

  query BlogPostQuery($index: Int) {
    content: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      skip: $index
    ) {
      edges {
        node {
          id
          html
          tableOfContents
          excerpt
          ...post
        }

        previous {
          ...post
        }

        next {
          ...post
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
          ...post
        }
      }
    }
  }
`;

export default BlogPost;
