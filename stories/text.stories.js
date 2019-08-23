import React from "react";
import { storiesOf } from "@storybook/react";

// components
import Text from "components/elements/Text";

// styles
import { CardWrapper, FontWrapper } from "styles/stories";

const BackgroundDecorator = storyFn => <CardWrapper>{storyFn()}</CardWrapper>;
const FontDecorator = storyFn => <FontWrapper>{storyFn()}</FontWrapper>;

storiesOf("Text", module)
  .addDecorator(BackgroundDecorator)
  .addDecorator(FontDecorator)
  .add("Titles", () => (
    <>
      <Text.H1Title>H1 Title</Text.H1Title>
      <Text.H2Title>H2 Title</Text.H2Title>
      <Text.H3Title>H3 Title</Text.H3Title>
      <Text.H4Title>H4 Title</Text.H4Title>
      <Text.H5Title>H5 Title</Text.H5Title>
      <Text.H6Title>H6 Title</Text.H6Title>
    </>
  ));
