import * as React from "react";
import { Route, Switch } from "react-router-dom";

//  assets
import { page } from "~utils/pathname";

//  styled components
import { Wrapper } from "./styles";

// Pages
import Home from "~views/Pages/Home";
import SignIn from "~views/Pages/SignIn";

const OrigRoute: React.FC = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path={page.Home.pathname} component={Home} />
        <Route exact path={page.SignIn.pathname} component={SignIn} />
      </Switch>
    </Wrapper>
  );
};

export default OrigRoute;
