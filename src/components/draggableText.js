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
    <Draggable bounds="parent" handle=".dragHandle">
      <div className="draggableText">
        <div className="m-1 px-5">
          <div
            id="dragHandle"
            className="dragHandle position-absolute"
            style={{
              backgroundColor: "red",
              width: "40px",
              height: "20px",
              opacity: "1",
              top: "70%",
              left: "-1%",
            }}
          />
          <Editor
            toolbarOnFocus
            placeholder="Click to add some text..."
            editorState={editorState}
            onEditorStateChange={(newEditorState) => {
              setEditorState(newEditorState);
              EditorState.moveFocusToEnd(editorState);
            }}
          />
        </div>
      </div>
    </Draggable>
  );
}

export default DraggableText;
