import React from "react";
import { Provider } from "react-redux";
//import { AppRouter } from "./routers/";

import { store } from "./API/redux/store";
import App from "./App";
//import theme from "./Theme/theme";
//import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

export const SantanderBirra = () => {
  return (
    <Provider store={store}>
      {/*<MuiThemeProvider theme={theme}>*/}
        {/*<AppRouter />*/}
        <App />
     { /*</MuiThemeProvider>*/}
    </Provider>
  );
};