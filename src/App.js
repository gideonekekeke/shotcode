import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Signup from "../src/Components/Signup/Signup";
import NavBar from "./Components/NavBar/index"
import SideBar from "./Components/SideBar/SideBar"
import Footer from "./Components/Footer/index"
import Curriculum from "./Components/Peter/CurriculumHolder";
import Services from "./Components/Services/Services";
import SignUp from "./Components/Signup/Signup";


function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Router>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign" component={Signup} />
          <Route exact path="/features" component={Curriculum} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/signUp" component={SignUp} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
