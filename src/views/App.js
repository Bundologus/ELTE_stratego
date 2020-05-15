import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Menu } from "./menu/Menu";
import { Waiting } from "./waiting/Waiting";
import { Lobby } from "./lobby/Lobby";
import { Game } from "./game/Game";
import { WrapHeader } from "./WrapHeader";


const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <WrapHeader children={<Menu />} />
        </Route>
        <Route path="/waitingRoom">
          <WrapHeader children={<Waiting />} />
        </Route>
        <Route path="/lobby">
          <WrapHeader children={<Lobby />} />
        </Route>
        <Route path="/game">
          <WrapHeader children={<Game />} />
        </Route>
        <Route>
          {() => {
            return "404: Page not found"
          }}
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
