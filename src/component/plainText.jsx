import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

export default (props) => {
  const height = window.innerHeight;
  const labelOffset = -60;
  const focused = true;

  const { userInput, setUserInput, classes } = props;
  return (
    <Paper elevation={4} className="plainText">
      {/* <TextField variant="outlined" InputProps={{ classes: { input: classes.input } }} /> */}
      tytyyty
      {/* <TextAreaAutosize
        placeholder="dfdf"
        // fullWidth
        // label="Example"
        // variant="outlined"
        // style={{ height, marginTop: "10px" }}
        // InputLabelProps={{ style: { height, ...(!focused && { top: `${labelOffset}px` }) } }}
        // inputProps={{ style: { height, padding: "0 14px", textAlign: "start" } }}
      /> */}
      {/* <textarea className="input-text" onChange={({ target }) => setUserInput(target.value)} defaultValue={userInput} /> */}
    </Paper>
  );
};
