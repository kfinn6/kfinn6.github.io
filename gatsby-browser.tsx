import * as React from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";

import { store } from "./src/store";

export const wrapRootElement = ({ element }) =>
    <Provider store={store} >
      {element}
    </Provider>;
