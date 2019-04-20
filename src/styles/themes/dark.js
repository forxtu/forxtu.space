const dark = {};

dark.indents = {
  smallPadding: "6px",
  defaultPadding: "12px"
};

dark.palette = {
  salmon: "#ff6f6f",
  ivory: "#FFFFF2",
  sunny: "#eaeac4",
  darkSeaGreen: "#24ada3",
  powderBlue: "#AEE5D8",
  white: "#fff",
  black: "#000",
  darkGrey: "#333",
  grey: "#aeaeae",
  lightGrey: "#d1d1d1",
  themeColors: {
    layoutBg: "#282828",
    itemBg: "#1f1f1f"
  },
  blackOpacity: "rgba(0, 0, 0, 0.6);"
};

const {
  palette: {
    black,
    darkGrey,
    lightGrey,
    darkSeaGreen,
    white,
    salmon,
    sunny,
    ivory,
    blackOpacity,
    themeColors
  }
} = dark;

dark.colors = {
  border: darkGrey,
  text: {
    title: lightGrey,
    default: lightGrey,
    link: sunny,
    linkBlack: white
  },
  highlight: salmon,
  header: {
    bg: themeColors.itemBg,
    navItem: ivory,
    logo: {
      bg: white,
      color: black
    }
  },
  postHeader: {
    titleBg: sunny,
    titleColor: darkGrey
  },
  sidebar: {
    bg: themeColors.itemBg,
    text: lightGrey,
    border: darkGrey,
    boxShadow: blackOpacity
  },
  layout: {
    bg: themeColors.layoutBg
  },
  card: {
    bg: themeColors.itemBg,
    border: darkGrey,
    boxShadow: blackOpacity
  },
  content: {
    border: sunny,
    gitalk: {
      commentBg: themeColors.layoutBg,
      commentHoverShadow: salmon,
      loginBg: salmon,
      editBg: themeColors.layoutBg,
      svg: salmon
    }
  },
  shareBox: {
    bg: blackOpacity
  }
};

dark.fonts = {};

dark.sizes = {
  padding: "12px",
  fonts: {
    small: "12px",
    default: "13px",
    defaultPlus: "14px",
    mediumValues: "15px",
    mediumValuesPlus: "18px",
    largeValues: "24px",
    largeValuesPlus: "32px",
    extraLargeValues: "40px",
    absoluteLargeValues: "60px"
  }
};

dark.animations = {
  transition: "0.2s"
};

export default dark;
