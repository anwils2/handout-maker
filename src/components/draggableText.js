import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import Draggable from "react-draggable";

const backgroundsPath = process.env.PUBLIC_URL + "/backgrounds/";

function DraggableText() {
  // props from WYSIWYG comp
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <Draggable bounds="parent">
      <div className="m-1 px-5">
        <Editor
          toolbarOnFocus
          editorState={editorState}
          onEditorStateChange={(newEditorState) => {
            setEditorState(newEditorState);
            EditorState.moveFocusToEnd(editorState);
          }}
        />
      </div>
    </Draggable>
  );
}

export default DraggableText;
