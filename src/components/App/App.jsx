import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../../Router";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"; // v1.x
import { indigo } from "@material-ui/core/colors";
import Header from "../Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
import "./main.scss";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
  },
});

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <div className="app">
          <Header />
          <Router />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};
