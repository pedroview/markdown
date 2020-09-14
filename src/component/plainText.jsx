import React from "react";

// plaintext component to get user input
export default ({ userInput, setUserInput }) => {
  return (
    <div className="plainText">
      <h2>Markdown Editor</h2>
      <textarea name="editor" id="editor" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
    </div>
  );
};
