import React from "react";
import Editor from "./Editor";

const CodeEditor = () => {
  return (
    <div>
      <div className="pane top-pane">
        <Editor />
        <Editor />
        <Editor />
      </div>
      <div className="pane bottom-pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default CodeEditor;
