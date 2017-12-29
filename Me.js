import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from 'react-hot-loader';

require("./src/styles/css/global");

import Users from "./components/users";

ReactDOM.render(
  <AppContainer>
    <Users/>
  </AppContainer>,
  document.getElementById("root")
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/users', () => {
    const NextApp = require('./components/users').default;
    ReactDOM.render(
      <AppContainer>
        <Users/>
      </AppContainer>,
      document.getElementById("root")
    );
  });
}