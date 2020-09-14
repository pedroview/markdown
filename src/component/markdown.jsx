import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import Preview from "./preview";
import Plaintext from "./plainText";
import CheatSheet from "./cheatSheet";

import "./markdown.css";

export default () => {
  const markDownIntroText =
    "# Markdown Editor/Preview by PedroView\n\n" +
    "---\n" +
    "### PedroView Services:\n\n" +
    "1. Software Design & Development\n2. Cyber Security\n\n" +
    "[Contact Developer](https://pedrojr.netlify.app)";

  const [userInput, setUserInput] = useState(markDownIntroText);

  return (
    <Grid container>
      <Grid item sm={12} md={6}>
        <Plaintext setUserInput={setUserInput} userInput={userInput} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Preview userInput={userInput} />
      </Grid>
      <Grid item sm={12}>
        <CheatSheet />
      </Grid>
    </Grid>
  );
};
