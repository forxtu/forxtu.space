import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { FormattedMessage } from "gatsby-plugin-intl";

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
    <Text.Title>
      <FormattedMessage
        defaultMessage="Ключевые ссылки"
        id="sidebar.key_links"
      />
    </Text.Title>
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
