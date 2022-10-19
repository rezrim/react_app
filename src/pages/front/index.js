import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminDashboardPages from "../admin/dashboard";
import LoginPages from "../login";
import CalculatorPages from "./calculator";
// import LayoutPages from "./pages/layout";
import Menu from "./../../components/Menu";
import HomePages from "./home";
import logo from "../../logo.svg";
import NotFound from "./notfound";

function FrontIndex(props) {
  return (
    <Router>
      <div>
        <div id="header">
          <div className="container">
            <div className="row-between">
              <img src={logo} />
              <Menu/>
              <div>
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/calculator">
            <CalculatorPages />
          </Route>
          <Route path="/home">
            <HomePages />
          </Route>
          <Route path="/login">
            <LoginPages />
          </Route>
          <Route exact path="/">
            <HomePages />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default FrontIndex;
