import React from "react";
import { number } from "prop-types";
import styled from "styled-components";

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
    <Text.Title>Всего статей: {totalCount}</Text.Title>
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
