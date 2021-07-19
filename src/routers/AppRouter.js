import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboarsRoutes } from "./DashboarsRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        { /* <Navbar1 /> */ }

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route exact path="/login">
            <LoginScreen />
          </Route>

          <Route  path="/">
            <DashboarsRoutes />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
};
