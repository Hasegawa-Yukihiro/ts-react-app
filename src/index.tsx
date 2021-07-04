import * as React from "react";
import ReactDOM from "react-dom";

//	lib
import "../public/styles.css";

//  providers
import Providers from "./views/Providers";

//  Route
import Route from "./views/Route";

ReactDOM.render(
  <Providers>
    <Route />
  </Providers>,
  document.getElementById("root")
);
