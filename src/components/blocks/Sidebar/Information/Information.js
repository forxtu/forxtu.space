import React from "react";
import { number } from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "gatsby-plugin-intl";

// components
import Friend from "../Friend";
import LatestPost from "../LatestPost";
import Text from "components/elements/Text";

const Wrapper = styled.div`
  a {
    display: block;
    text-align: left;
  }
`;

const Information = ({ totalCount, posts }) => (
  <Wrapper>
    <hr />
    <Text.H4Title>
      <FormattedMessage
        defaultMessage="Всего статей"
        id="sidebar.number_of_articles"
      />
      : {totalCount}
    </Text.H4Title>
    <hr />
    <LatestPost posts={posts} />
    <hr />
    <Friend />
  </Wrapper>
);

Information.propTypes = {
  totalCount: number.isRequired
};

export default Information;
