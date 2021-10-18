import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shop from "./components/Shop/Shop";

function App ()
{
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route exact path="/home">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
