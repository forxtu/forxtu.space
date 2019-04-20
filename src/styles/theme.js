import light from "styles/themes/light";
import dark from "styles/themes/dark";

const theme = mode => (mode === "dark" ? dark : light);

export default theme;
