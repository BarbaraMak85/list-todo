import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { routes } from "../helpers/routes";
import CompletedTodos from "../views/CompletedTodos";
import UncompletedTodos from "../views/UncompletedTodos";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={routes.home} component={UncompletedTodos} />
        <Route path={routes.completed} component={CompletedTodos} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
