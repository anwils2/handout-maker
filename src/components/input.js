import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, focus } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TextInput({ editorState, setEditorState }) {
  return (
    <div className="TextInput">
      <div>
        <Editor
          onBlur={(e) => focus()}
          editorState={editorState}
          onEditorStateChange={(newEditorState) => {
            setEditorState(newEditorState);
          }}
        />
      </div>
    </div>
  );
}

export default TextInput;
