import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TextInput(editorState, setEditorState) {
  return (
    <div className="TextInput">
      <div>
        <Editor
          editorState={editorState}
          onEditorStateChange={(newEditorState) =>
            setEditorState(newEditorState)
          }
        />
      </div>
    </div>
  );
}

export default TextInput;
