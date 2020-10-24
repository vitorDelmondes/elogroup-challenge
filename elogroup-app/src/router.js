import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Rotas da aplicação
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";

const Routes = () => (
  <Switch>
    {/* <AuthenticationRoute path="/signIn" component={SignIn} /> */}
    <Route exact path="/" component={SignUp} />
    <Route path="/signin" component={SignIn} />
  </Switch>
);

export default Routes;
