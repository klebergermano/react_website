import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home.js";
import Services from "./components/pages/services.js";
import Header from "./components/common/header.js";
import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
      </div>
    </Router>
  );
}

export default App;
