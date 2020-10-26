import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Rotas da aplicação
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/signUp" component={SignUp} />
  </Switch>
);

export default Routes;
