import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import FrontIndex from "./pages/front";
import AdminIndex from "./pages/admin";
import NotFound from "./pages/front/notfound";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/admin">
            <AdminIndex />
          </Route>
          
          <Route path="/">
            <FrontIndex />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
