import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core";

// component entry and theme config
import Markdown from "./component/markdown";
import theme from "./theme";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Markdown />
  </MuiThemeProvider>,
  document.getElementById("root")
);
