import { createMuiTheme, Theme as MuiTheme } from "@material-ui/core";
import ColorPicker from "./ColorPicker";
import FontSize from "./FontSize";

const fontSize = new FontSize();
const colorPicker = new ColorPicker();

/** */
interface OrigTheme {
  fontSize: typeof fontSize.fontSize;
  colorPicker: typeof colorPicker.colorPicker;
  hideScroll: {
    "-ms-overflow-style": "none";
    scrollbarWidth: "none";
    "&::-webkit-scrollbar": { display: "none" };
  };
}

/** */
const origTheme: OrigTheme = {
  fontSize: key => fontSize.fontSize(key),
  colorPicker: (color, option) => colorPicker.colorPicker(color, option),
  hideScroll: {
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" }
  }
};

/** */
const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(40,40,40,1)"
    },
    secondary: {
      main: "rgba(55,5,5,1)"
    },
    text: {
      primary: "rgba(40,40,40,1)",
      secondary: "rgba(40,40,40,1)"
    }
  },
  zIndex: {
    snackbar: 2000,
    modal: 1500
  }
});

export const theme = { ...origTheme, ...muiTheme };

/** */
export type Theme = OrigTheme & MuiTheme;

//  extends styled component theme interface
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

//  extends mui theme interface
declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme extends OrigTheme {}
}
export { muiTheme, origTheme };
