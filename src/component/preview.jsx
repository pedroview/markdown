import React from "react";
import Remarkable from "remarkable";
import Paper from "@material-ui/core/Paper";

export default ({ userInput }) => {
  const getRawMarkup = () => {
    const md = new Remarkable();
    return { __html: md.render(userInput) };
  };

  return (
    <Paper elevation={4} className="preview">
      <div dangerouslySetInnerHTML={getRawMarkup()} className="output-text" />
    </Paper>
  );
};
