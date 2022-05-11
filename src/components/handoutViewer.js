import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

const backgroundsPath = process.env.PUBLIC_URL + "/backgrounds/";

function HandoutViewer({ editorState }) {
  // props from WYSIWYG comp

  return (
    <div className="HandoutViewer">
      <div>
        <img src={`${backgroundsPath}pamphlet.jpg`} />
        <Editor toolbarHidden readOnly editorState={editorState} />
      </div>
    </div>
  );
}

export default HandoutViewer;
