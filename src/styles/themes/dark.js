const dark = {};

dark.indents = {
  smallPadding: "6px",
  defaultPadding: "12px"
};

dark.palette = {
  salmon: "#ff6f6f",
  ivory: "#FFFFF2",
  sunny: "#eaeac4",
  veryLightRed: "#f7c5b2",
  lightSunny: "#f9f9aa",
  darkSeaGreen: "#24ada3",
  powderGreen: "#AEE5D8",
  white: "#fff",
  black: "#000",
  darkGrey: "#333",
  grey: "#aeaeae",
  lightGrey: "#d1d1d1",
  themeColors: {
    itemBg: "#282828",
    layoutBg: "#1f1f1f"
  },
  blackOpacity: "rgba(0, 0, 0, 0.6);"
};

const {
  palette: {
    black,
    darkGrey,
    lightGrey,
    white,
    salmon,
    sunny,
    lightSunny,
    ivory,
    veryLightRed,
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
  highlight: lightSunny,
  header: {
    bg: themeColors.layoutBg,
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
  form: {
    border: sunny,
    boxShadow: lightSunny
  },
  button: {
    bg: darkGrey,
    border: sunny,
    text: sunny,
    inverted: {
      bg: sunny,
      border: lightSunny,
      text: black
    }
  },
  content: {
    border: sunny,
    gitalk: {
      commentBg: themeColors.layoutBg,
      commentHoverShadow: salmon,
      loginBg: salmon,
      editBg: themeColors.layoutBg,
      svg: salmon,
      popup: {
        bg: themeColors.itemBg,
        border: darkGrey
      }
    },
    em: {
      bg: themeColors.itemBg,
      text: veryLightRed
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
