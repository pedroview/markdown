import React from "react";
import Paper from "@material-ui/core/Paper";

export default ({ userInput, setUserInput }) => {
  return (
    <Paper elevation={4} className="plainText">
      <textarea className="input-text" onChange={({ target }) => setUserInput(target.value)} defaultValue={userInput} />
    </Paper>
  );
};
