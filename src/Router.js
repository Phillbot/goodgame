import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Channel } from "./components/pages/Home/Streams/Channel";
import { Game } from "./components/pages/Home/Games/Game";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/games" component={Home} />
      <Route exact path="/channel/:channelKey" component={Channel} />
      <Route exact path="/games/:game" component={Game} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  );
};
