import React from "react";
import { bool, number, array } from "prop-types";

// utils
import { config } from "../../../../data";

// styles
import IconLink from "components/elements/IconLink";
import * as s from "./sidebarStyles";

// components
import Information from "./Information";

const { wordings = [], email, iconUrl, about } = config;

const Sidebar = ({ post, totalCount, posts }) => (
  <s.StyledHeader
    className={`text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1 ${
      post === true ? "order-11" : "order-1"
    }`}
  >
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
        📧
      </IconLink>
      <Information totalCount={totalCount} posts={posts} />
    </s.About>
  </s.StyledHeader>
);

Sidebar.propTypes = {
  post: bool,
  totalCount: number,
  posts: array
};

Sidebar.defaultProps = {
  post: false,
  totalCount: 0
};

export default Sidebar;
