import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import { lightTheme } from "../theme";
import { App, AppProps } from "./components/App";
import { store } from "./store/root";

/* global document, Office, module, require */

let isOfficeInitialized = false;

const title = "Template Outlook";

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Component title={title} isOfficeInitialized={isOfficeInitialized} />
        </ThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById("container")
  );
};

/* Render application after Office initializes */
Office.onReady(() => {
  isOfficeInitialized = true;
  render(App);
});

if ((module as any).hot) {
  (module as any).hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    render(NextApp);
  });
}
