import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import Preview from "./preview";
import Plaintext from "./plainText";
import CheatSheet from "./cheatSheet";

import "./markdown.css";

export default () => {
  const [userInput, setUserInput] = useState("Type some *markdown* here!");

  return (
    <Grid container>
      <Grid item sm={12} md={6}>
        <Plaintext setUserInput={setUserInput} userInput={userInput} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Preview userInput={userInput} />
      </Grid>
      <Grid item sm={12} md={12}>
        <CheatSheet />
      </Grid>
    </Grid>
  );
};
