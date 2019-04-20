import React from "react";
import { string, bool } from "prop-types";
import ReactGA from "react-ga";

// hooks
import useScrollHandler from "src/hooks/useScrollHandler";

// styles
import { Wrapper } from "./shareBoxStyles";
import IconLink from "components/elements/IconLink";

// components
import ThemeToggler from "components/elements/ThemeToggler";

const ShareBox = ({ url, hasCommentBox }) => {
  const { isHidden } = useScrollHandler();

  return (
    <Wrapper isHidden={isHidden}>
      <IconLink
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        title=""
        onClick={() =>
          ReactGA.event({
            category: "Share",
            action: "Facebook Share"
          })
        }
      >
        ✨
      </IconLink>

      <ThemeToggler />

      {hasCommentBox && (
        <IconLink
          href="#gitalk-container"
          onClick={() =>
            ReactGA.event({
              category: "User",
              action: "Goto Comment Box"
            })
          }
        >
          👋
        </IconLink>
      )}

      <IconLink
        href="#header"
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Scroll to Top"
          });
        }}
      >
        ☝️
      </IconLink>
    </Wrapper>
  );
};

ShareBox.propTypes = {
  url: string.isRequired,
  hasCommentBox: bool
};

ShareBox.defaultProps = {
  hasCommentBox: true
};

export default ShareBox;
