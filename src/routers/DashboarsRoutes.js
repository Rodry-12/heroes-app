import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { Marvel } from "../components/marvel/Marvel";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar1 } from "../components/ui/Navbar1";

export const DashboarsRoutes = () => {
  return (
    <>
      <Navbar1 />

      <div className="container mt-2">

        <Switch>

          <Route exact path="/marvel">
            <Marvel />
          </Route>
          <Route exact path="/heroe/:heroeId">
            <HeroScreen />
          </Route>
          <Route exact path="/dc">
            <DcScreen />
          </Route>
          <Route exact path="/search">
            <SearchScreen />
          </Route>

          <Redirect to="/marvel"/>

        </Switch>

      </div>
    </>
  );
};
