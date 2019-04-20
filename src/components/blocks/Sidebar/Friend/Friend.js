import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

// utils
import { config } from "../../../../../data";

// components
import ExternalLink from "components/elements/ExternalLink";
import Text from "components/elements/Text";

const Wrapper = styled.div`
  a {
    color: ${theme("colors.text.linkBlack")};
  }
`;

const { friends = [] } = config;

const Friend = () => (
  <Wrapper>
    <Text.Title>Ключевые ссылки</Text.Title>
    {friends.map(friend => (
      <ExternalLink
        href={friend.href}
        title={friend.title}
        key={friend.title}
        rel="noopener"
      />
    ))}
  </Wrapper>
);

export default Friend;
