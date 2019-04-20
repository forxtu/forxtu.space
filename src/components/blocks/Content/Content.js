import React, { useEffect } from "react";
import { string } from "prop-types";
import lozad from "lozad";

// utils
import { isBrowser } from "api";

const Content = ({ post }) => {
  useEffect(() => {
    // lazy loads elements with default selector as '.lozad'
    // Prevent WebPack build fail
    if (isBrowser()) {
      // Initialize library
      const observer = lozad(".lozad", {
        load(el) {
          el.src = el.dataset.src;
          el.onload = () => {
            el.classList.add("animated");
            el.classList.add("fadeIn");
          };
        }
      });
      observer.observe();
    }
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: post }} />;
};

Content.propTypes = {
  post: string.isRequired
};

export default Content;
