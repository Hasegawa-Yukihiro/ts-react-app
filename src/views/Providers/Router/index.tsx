import * as React from "react";
import { Router } from "react-router-dom";

import { history } from "./modules";

const OrigRouter: React.FC = props => {
  return <Router history={history}>{props.children}</Router>;
};

export default OrigRouter;
