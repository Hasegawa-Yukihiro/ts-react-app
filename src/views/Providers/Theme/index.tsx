import * as React from "react";

import { muiTheme, origTheme } from "./theme";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core";

const OrigThemeProvider: React.FC = props => {
  return (
    <MuiThemeProvider theme={{ ...muiTheme, ...origTheme }}>
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={{ ...muiTheme, ...origTheme }}>
          {props.children}
        </StyledThemeProvider>
      </StylesProvider>
    </MuiThemeProvider>
  );
};

export default OrigThemeProvider;
