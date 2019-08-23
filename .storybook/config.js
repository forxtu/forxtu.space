import { configure, addDecorator, addParameters } from "@storybook/react";
import { withThemes } from "storybook-styled-components";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";

// utils
import light from "styles/themes/light";
import dark from "styles/themes/dark";

const themes = {
  "Light Theme": light,
  "Dark Theme": dark
};

addDecorator(withThemes(themes));
addDecorator(withA11y);

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
