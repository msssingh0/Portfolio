import React from "react";
import { Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import "./App.css";

import Home from "./components/index";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/portfolio" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </>
  );
}

export default App;
