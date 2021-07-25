import * as React from "react";
import { Route, Switch } from "react-router-dom";

//  assets
import { page } from "~utils/pathname";

//  components
import { Wrapper } from "./styles";

// Pages
import Home from "~views/Pages/Home";
import SignIn from "~views/Pages/SignIn";
import SignUp from "~views/Pages/SignUp";

const OrigRoute: React.FC = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path={page.Home.pathname} component={Home} />
        <Route exact path={page.SignIn.pathname} component={SignIn} />
        <Route exact path={page.SignUp.pathname} component={SignUp} />
      </Switch>
    </Wrapper>
  );
};

export default OrigRoute;
