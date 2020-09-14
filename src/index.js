import React from "react";
import ReactDOM from "react-dom";
// Material UI
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import amber from "@material-ui/core/colors/amber";
// component entry
import Markdown from "./component/markdown";

// theme object for mui
const theme = createMuiTheme({
  palette: {
    primary: amber,
  },
  overrides: {
    MuiPaper: {
      root: {
        overflow: "hidden",
        margin: 5,
        boxSizing: "border-box",
      },
      rounded: {
        borderRadius: 5,
      },
    },
    MuiTableCell: {
      head: {
        backgroundColor: "black",
        color: "white",
      },
      body: {
        fontSize: 14,
      },
    },
    MuiTableRow: {
      root: {
        "&:nth-of-type(odd)": {
          backgroundColor: "silver",
        },
      },
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Markdown />,
  </MuiThemeProvider>,
  document.getElementById("root")
);
