import React from "react";
import { number, array } from "prop-types";

// utils
import { config } from "../../../../data";

// styles
import IconLink from "components/elements/IconLink";
import * as s from "./sidebarStyles";

// components
import Information from "./Information";

const { wordings = [], email, about } = config;

const Sidebar = ({ totalCount, posts }) => (
  <s.StyledHeader>
    <s.About className="about-me">
      <s.StyledLink to={about} href={about}>
        {/* <s.Avatar src={iconUrl} alt="Forxtu" /> */}
        <s.AvatarBlock>FX2</s.AvatarBlock>
      </s.StyledLink>
      <s.Description className="mb-1">{wordings[0]}</s.Description>
      <s.Description className="mb-3">{wordings[1]}</s.Description>
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
