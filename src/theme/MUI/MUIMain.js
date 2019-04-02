import { createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const baseTheme = createMuiTheme({
  palette: {
    tonalOffset: 0.2,
    background: { paper: "#fff", default: "#f6f6f6" },
    primary: { main: "#212121" },
    secondary: { main: blue[500], light: blue[200], dark: blue[800] }
  },
  colors: {
    success: "#01C851",
    warning: "#FFBB34",
    info: "#4385F5",
    link: "#4789E5",
    google: "#D94837"
  },
  typography: {
    useNextVariants: true
  }
});

export default baseTheme;

export function createTheme(obj) {
  return { ...baseTheme, ...obj };
}
