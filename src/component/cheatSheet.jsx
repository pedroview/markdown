import React from "react";
import Paper from "@material-ui/core/Paper";

export default () => (
  <Paper elevation={4} className="cheatSheet">
    <ul>
      <li># --- header1</li>
      <li>## --- header2</li>
      <li>### --- header3</li>
      <li> > --- quote</li>
    </ul>
  </Paper>
);
