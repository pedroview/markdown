import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import Preview from "./preview";
import Plaintext from "./plainText";
import CheatSheet from "./cheatSheet";

import "./markdown.css";

export default () => {
  // initail text to be dsplayed when user visit's web page
  const markDownIntroText = `
# Markdown Editor/Preview by PedroView   
---
### PedroView Services:   
   
&nbsp;

1. Software Design & Development
2. Cyber Security
2. IT Consultant

&nbsp;

[Contact Developer](https://pedrojr.netlify.app)

&nbsp;

**you can type here**
  `;

  // holder for user input
  const [userInput, setUserInput] = useState(markDownIntroText);

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        <Plaintext setUserInput={setUserInput} userInput={userInput} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Preview userInput={userInput} />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <CheatSheet />
      </Grid>
    </Grid>
  );
};
