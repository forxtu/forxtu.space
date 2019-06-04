import ReactGA from "react-ga";

// utils
import { config } from "./data";
import installFontAwesome from "api/installFontAwesome";

// styles
import "styles/prism-atom-dark.css";

const { url, gaTrackId, gaOptimizeId, transitionDelay = 100 } = config;

installFontAwesome();

const isLocalDevelopment = () => window && window.location && window.location.origin !== url;

if (isLocalDevelopment() === false) {
  ReactGA.initialize(gaTrackId);

  // Google Optimizer
  if (gaOptimizeId) {
    ReactGA.ga("require", gaOptimizeId);
  }
  console.log("Welcome to online environment.");
}

export const onRouteUpdate = state => {
  if (isLocalDevelopment() !== true) {
    ReactGA.pageview(state.location.pathname);
  } else {
    console.log("isLocalDevelopment is true, so ReactGA is not activated");
  }
};

// Transition
export const shouldUpdateScroll = ({
  prevRouterProps,
  routerProps: { location }
}) => {
  if (
    prevRouterProps
    && prevRouterProps.location.pathname === location.pathname
  ) {
    if (window) {
      const SmoothScroll = require("smooth-scroll");
      const header = document.getElementById("header");
      const scroll = new SmoothScroll("#header", { offset: 60 });
      if (header) {
        setTimeout(() => scroll.animateScroll(header), transitionDelay);
      }
    }
    return false;
  }

  if (location.action === "PUSH") {
    if (window) {
      setTimeout(() => window.scrollTo(0, 0), transitionDelay);
    }
  }
  return false;
};
