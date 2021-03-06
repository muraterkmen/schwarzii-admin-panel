import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router";

import AppLayout from "./../../layout/default";
import { RoutedContent } from "./../../routes";

import jwtDecode from "jwt-decode";
// Redux
import { Provider } from "react-redux";
import store from "../../redux/store";

const basePath = process.env.BASE_PATH || "/";

const AppClient = () => {
    
  return (
    <Provider store={store}>
      <Router basename={basePath}>
        <AppLayout>
          <RoutedContent />
        </AppLayout>
      </Router>
    </Provider>
  );
};

export default hot(module)(AppClient);
