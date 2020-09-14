import React from "react";
import Remarkable from "remarkable";

export default ({ userInput }) => {
  const getRawMarkup = () => {
    const md = new Remarkable();
    return { __html: md.render(userInput) };
  };

  return (
    <div className="preview">
      <h2>Markdown Preview</h2>
      <div dangerouslySetInnerHTML={getRawMarkup()} />
    </div>
  );
};
