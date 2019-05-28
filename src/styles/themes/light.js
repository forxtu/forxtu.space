const light = {};

light.indents = {
  smallPadding: "6px",
  defaultPadding: "12px"
};

light.palette = {
  salmon: "#ff6f6f",
  ivory: "#FFFFF2",
  lightSeaGreen: "#24ada3",
  powderGreen: "#AEE5D8",
  veryLightGreen: "#dbfff0",
  steelBlue: "#2492c9",
  darkBlue: "#000d72",
  veryLightGrey: "#f9f9fa",
  white: "#fff",
  black: "#000",
  darkGrey: "#333",
  grey: "#aeaeae",
  lightGrey: "#d1d1d1",
  opacityGrey: "#b8b6b6",
  ivoryOpacity: "rgba(253, 249, 243, 0.6);"
};

const {
  palette: {
    lightSeaGreen,
    powderGreen,
    veryLightGreen,
    darkBlue,
    veryLightGrey,
    grey,
    darkGrey,
    lightGrey,
    white,
    black,
    salmon,
    ivory,
    ivoryOpacity,
    opacityGrey
  }
} = light;

light.colors = {
  border: lightGrey,
  text: {
    title: black,
    default: darkGrey,
    link: lightSeaGreen,
    linkBlack: black
  },
  highlight: salmon,
  layout: {
    bg: veryLightGrey
  },
  header: {
    bg: ivory,
    navItem: darkGrey,
    logo: {
      bg: black,
      color: white
    }
  },
  postHeader: {
    titleBg: lightSeaGreen,
    titleColor: white
  },
  sidebar: {
    bg: white,
    text: darkGrey,
    border: opacityGrey,
    boxShadow: grey
  },
  card: {
    bg: white,
    border: lightGrey,
    boxShadow: grey
  },
  form: {
    border: lightSeaGreen,
    boxShadow: lightSeaGreen
  },
  button: {
    bg: white,
    border: lightSeaGreen,
    text: lightSeaGreen,
    inverted: {
      bg: lightSeaGreen,
      border: lightSeaGreen,
      text: white
    }
  },
  content: {
    border: powderGreen,
    gitalk: {
      commentBg: veryLightGrey,
      commentHoverShadow: salmon,
      loginBg: lightSeaGreen,
      editBg: white,
      svg: black,
      popup: {
        bg: white,
        border: lightGrey
      }
    },
    em: {
      bg: veryLightGreen,
      text: darkBlue
    }
  },
  shareBox: {
    bg: ivoryOpacity
  }
};

light.fonts = {};

light.sizes = {
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

light.animations = {
  transition: "0.2s"
};

export default light;
