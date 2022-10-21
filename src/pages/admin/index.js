import { Box, Grid } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuAdmin from "../../components/MenuAdmin";
import logo from "../../logo.svg";
import NotFound from "../front/notfound";
import AdminCategoryPages from "./category";
import AdminDashboardPages from "./dashboard";
import AdminProductPages from "./product";

function AdminIndex(props) {
  return (
    <Router>
      <div>
        <Grid container>
          <Grid
            item
            xs={2}
            sx={{ bgcolor: "primary.main", minHeight: "100vh" }}
          >
            <Box>
              <Box>
                <img src={logo} style={{ width: "100%" }} />
              </Box>
              <hr />
              <Box>
                <MenuAdmin />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={10}>
            <div id="header" />

            <Switch>
              <Route path="/admin/dashboard">
                <AdminDashboardPages />
              </Route>
              <Route path="/admin/product">
                <AdminProductPages />
              </Route>
              <Route path="/admin/category">
                <AdminCategoryPages />
              </Route>
              <Route exact path="/admin">
                <AdminDashboardPages />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default AdminIndex;
