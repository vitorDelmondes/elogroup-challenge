import React from "react";
import { Route, Switch } from "react-router-dom";

// Rotas da aplicação
import SignIn from "./pages/Auth/SignIn-SignUp";
import Main from "./pages/Main";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/main" component={Main} />
  </Switch>
);

export default Routes;
