import styled from "styled-components";
import { Row, Col } from "styled-bootstrap-grid";
import { theme } from "styled-tools";

export const PostWrapper = styled(Row)`
  @media screen and (max-width: 990px) {
    padding: 5px 25px;
  }
  border-radius: 2px;
`;

export const ContentWrapper = styled(Col)`
  background: ${theme("colors.card.bg")};
  box-shadow: 5px 5px 0px 0 ${theme("colors.content.border")};
  border: 1px solid ${theme("colors.card.border")};
  margin-right: auto;
  padding: 15px 25px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme("colors.text.title")};
  }
  p,
  li {
    color: ${theme("colors.text.default")};
  }

  h2 {
    font-weight: 600;
    margin-bottom: 25px;
  }

  a {
    color: ${theme("colors.text.link")};
    &:hover {
      color: ${theme("colors.text.link")};
    }
  }

  img {
    width: 100%;
  }

  blockquote {
    max-width: 100%;
    width: 100%;
    word-break: break-word;
    caret-color: rgba(255, 255, 255, 0.9);
    border-left: 3px solid ${theme("colors.card.border")};
    margin: 0;
    padding-left: 0.9em;
    padding-right: 0.9em;
  }

  @media screen and (min-width: 990px) {
    margin-left: 1.5rem;
  }
`;

export const SuggestionTitle = styled.h4``;

export const SuggestionWrapper = styled.div`
  border-top: 3px solid ${theme("colors.highlight")};
  padding-top: 15px;
  margin-top: 45px;
  ${SuggestionTitle} {
  }
`;

export const GitalkContainer = styled.div`
  margin: 0 auto;

  div > span {
    color: ${theme("colors.text.default")};
  }

  svg {
    fill: ${theme("colors.content.gitalk.svg")} !important;
  }

  a {
    color: ${theme("colors.text.link")} !important;
    &:hover {
      color: ${theme("colors.text.link")};
    }
  }

  .gt-comment-content {
    background: ${theme("colors.content.gitalk.commentBg")} !important;
    &:hover {
      box-shadow: 0 5px 0 0 ${theme("colors.content.gitalk.commentHoverShadow")} !important;
    }
  }

  .gt-popup {
    background-color: ${theme("colors.content.gitalk.popup.bg")} !important;
    border-color: ${theme("colors.content.gitalk.popup.border")} !important;
  }

  .gt-header-preview.markdown-body,
  .gt-header-textarea {
    background: ${theme("colors.content.gitalk.commentBg")} !important;
    color: ${theme("colors.text.default")} !important;
  }

  .gt-header-controls {
    .gt-btn-login,
    .gt-btn-public {
      background-color: ${theme("colors.content.gitalk.loginBg")} !important;
      border-color: ${theme("colors.content.gitalk.loginBg")} !important;
    }
    .gt-btn-preview {
      background-color: ${theme("colors.content.gitalk.editBg")} !important;
      border-color: ${theme("colors.content.gitalk.loginBg")} !important;
      color: ${theme("colors.content.gitalk.loginBg")} !important;
    }
  }

  .gt-comment-body.markdown-body {
    p {
      color: ${theme("colors.text.default")};
    }
  }
`;
