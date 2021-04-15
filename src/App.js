import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Signup from "../src/Components/Signup/Signup";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
