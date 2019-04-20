import React, { Component, useEffect } from "react";
import { graphql } from "gatsby";

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
    <S.PostWrapper className="post order-2">
      <Header
        img={headerImage || defaultPostHeaderImage}
        title={title}
        authorName={name}
        authorImage={iconUrl}
        subTitle={parseChineseDate(date)}
      />
      <Sidebar totalCount={totalCount} posts={edges} post />
      <S.ContentWrapper xl={7} lg={6} md={12} sm={12} className="order-10">
        <Content post={html} />
        <S.SuggestionWrapper>
          <S.SuggestionTitle>Возможно вам понравится</S.SuggestionTitle>
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

        <S.GitalkContainer id="gitalk-container" />
      </S.ContentWrapper>
      {tableOfContents && <TableOfContent __html={tableOfContents} />}

      <ShareBox url={slug} />

      <SEO
        title={title}
        url={slug}
        siteTitleAlt="FX2 Blog"
        isPost={false}
        description={excerpt}
        image={headerImage || defaultPostHeaderImage}
      />
    </S.PostWrapper>
  );
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
      limit: 1
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
