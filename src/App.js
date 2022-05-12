import "./App.css";
import { EditorState } from "draft-js";
import TextInput from "./components/input";
import HandoutViewer from "./components/handoutViewer";
import { useState, useEffect, useRef } from "react";

function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div>
      <header>
        <h2>Handout Maker</h2>
      </header>
      <div className="container">
        <div className="row">
          <div className="bkg-select col"></div>
          <div className="row">
            <div className="col">
              <HandoutViewer
                editorState={editorState}
                setEditorState={setEditorState}
              />
            </div>
            <div className="col">
              <TextInput
                editorState={editorState}
                setEditorState={setEditorState}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
