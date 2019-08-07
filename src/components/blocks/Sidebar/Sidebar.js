import React from "react";
import { number, array } from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";

// utils
import { config } from "../../../../data";

// components
import StyledLink from "components/elements/StyledLink";

// styles
import IconLink from "components/elements/IconLink";
import * as s from "./sidebarStyles";

// components
import Information from "./Information";

const { email } = config;

const Sidebar = ({ totalCount, posts }) => (
  <s.StyledHeader>
    <s.About className="about-me">
      <StyledLink to="/about/" href="/about/">
        {/* <s.Avatar src={iconUrl} alt="Forxtu" /> */}
        <s.AvatarBlock>FX2</s.AvatarBlock>
      </StyledLink>
      <s.Description className="mb-1">
        <FormattedMessage
          defaultMessage="Задайте свой вопрос!"
          id="sidebar.write_me"
        />
      </s.Description>
      <IconLink
        target="_blank"
        href={`mailto:${email}`}
        rel="external nofollow noopener noreferrer"
      >
        <span role="img" aria-label="send an email">
          📧
        </span>
      </IconLink>
      <Information totalCount={totalCount} posts={posts} />
    </s.About>
  </s.StyledHeader>
);

Sidebar.propTypes = {
  totalCount: number,
  posts: array
};

Sidebar.defaultProps = {
  totalCount: 0,
  posts: []
};

export default Sidebar;
