import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const backgroundsPath = process.env.PUBLIC_URL + "/backgrounds/";

function HandoutViewer({ editorState, setEditorState }) {
  // props from WYSIWYG comp

  return (
    <div className="HandoutViewer">
      <div id="holder" className="row holder">
        <img src={`${backgroundsPath}pamphlet.jpg`} />
        <div className="m-4 centered">
          <Editor
            toolbarHidden
            editorState={editorState}
            onEditorStateChange={(newEditorState) => {
              setEditorState(newEditorState);
              EditorState.moveFocusToEnd(editorState);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HandoutViewer;
