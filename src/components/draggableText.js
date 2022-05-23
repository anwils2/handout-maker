import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import Draggable from "react-draggable";

const backgroundsPath = process.env.PUBLIC_URL + "/backgrounds/";

function DraggableText() {
  // props from WYSIWYG comp
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [handleVisible, sethandleVisible] = useState(false);

  const handleVisibleOnHover = () => {
    sethandleVisible(true);
  };

  const handleVisibleOnHoverExit = () => {
    sethandleVisible(false);
  };

  return (
    <Draggable handle=".dragHandle">
      <div
        className="draggableText m-1 px-5"
        onMouseOver={sethandleVisible}
        onMouseOut={handleVisibleOnHoverExit}
      >
        <div
          id="dragHandle"
          className="dragHandle position-absolute text-center border border-2 border-secondary"
          style={{
            backgroundColor: "red",
            width: "40px",
            height: "30px",
            opacity: `${handleVisible ? "1" : "0"}`,
            top: "70%",
            left: "-1%",
          }}
        >
          <span>Drag</span>
        </div>
        <Editor
          toolbarOnFocus
          placeholder="Click to add some text..."
          editorState={editorState}
          editorStyle={{ fontSize: 30, fontFamily: "CloisterBlack" }}
          onEditorStateChange={(newEditorState) => {
            setEditorState(newEditorState);
            EditorState.moveFocusToEnd(editorState);
          }}
          toolbar={{
            fontFamily: {
              options: ["CloisterBlack", "Exmouth"],
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
            },
          }}
        />
      </div>
    </Draggable>
  );
}

export default DraggableText;
