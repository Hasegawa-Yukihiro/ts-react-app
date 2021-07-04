import * as React from "react";

//  providers
import Router from "./Router";
import ThemeProvider from "./Theme";

const Providers: React.FC = props => {
  return (
    <Router>
      <ThemeProvider>{props.children}</ThemeProvider>
    </Router>
  );
};

export default Providers;
