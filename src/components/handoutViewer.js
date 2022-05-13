import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import Draggable from "react-draggable";

const backgroundsPath = process.env.PUBLIC_URL + "/backgrounds/";

function HandoutViewer({ editorState, setEditorState }) {
  // props from WYSIWYG comp

  return (
    <div className="HandoutViewer">
      <div id="holder" className="row holder">
        <img src={`${backgroundsPath}pamphlet.jpg`} />
        <Draggable bounds="parent">
          <div className="m-1 px-5">
            <Editor
              toolbarHidden
              editorState={editorState}
              onEditorStateChange={(newEditorState) => {
                setEditorState(newEditorState);
                EditorState.moveFocusToEnd(editorState);
              }}
            />
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default HandoutViewer;
