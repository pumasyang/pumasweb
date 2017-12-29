import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

require("./src/styles/css/global");

import Product from "./components/product";

ReactDOM.render(
    <AppContainer>
        <Product />
    </AppContainer>,
    document.getElementById("root")
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/product', () => {
        const NextApp = require('./components/product').default;
        ReactDOM.render(
            <AppContainer>
                <Product />
            </AppContainer>,
            document.getElementById("root")
        );
    });
}
