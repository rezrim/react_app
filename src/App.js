import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LayoutPages from "./pages/layout";
import Menu from "./components/Menu";
import logo from "./logo.svg";

import HomePages from "./pages/home";
import CalculatorPages from "./pages/calculator";

function App() {
  return (
    <Router>
      <div>
        <div id="header">
          <div className="container">
            <div className="row-between">
              <img src={logo} />
              <Menu user="b" />
              <div>
                <a href="#">Login</a> |
                <a href="register.html"> Register</a>
              </div>
            </div>
          </div>
        </div>

        <Switch> {/* Seperti Yield */}
          <Route path="/calculator">  {/* Seperti Section */}
            <CalculatorPages /> {/* Component Home */}
          </Route>
          <Route path="/home">
            <HomePages />
          </Route>
          <Route path="/">
            <HomePages />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
