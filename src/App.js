import "./App.css";
import { EditorState } from "draft-js";
import TextInput from "./components/input";
import HandoutViewer from "./components/handoutViewer";
import DraggableText from "./components/draggableText";
import { useState, useEffect, useRef } from "react";
import domtoimage from "dom-to-image";

function App() {
  const [textElementsOnHandout, setTextElementsOnHandout] = useState([
    <DraggableText />,
  ]);

  const handoutRef = document.getElementById("holder");

  const downloadHandout = () => {
    domtoimage
      .toPng(handoutRef, {
        width: handoutRef.offsetWidth,
        height: handoutRef.offsetHeight,
      })
      .then(function (dataUrl) {
        let link = document.createElement("a");
        link.download = "handout.png";
        link.href = dataUrl;
        link.click();
      });
  };

  const addText = () => {
    setTextElementsOnHandout([...textElementsOnHandout, <DraggableText />]);
  };

  return (
    <div>
      <header>
        <h2>Handout Maker</h2>
      </header>
      <div className="container">
        <div className="row">
          <div className="bkg-select col"></div>
          <div className="row">
            <div className="col-6">
              <HandoutViewer textElementsOnHandout={textElementsOnHandout} />
            </div>
            <div className="col-6">
              <div className="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={addText}
                >
                  Add Additional Text
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={downloadHandout}
                >
                  Download Handout
                </button>
              </div>
            </div>
            {/* <div className="col-6">
              <TextInput
                editorState={editorState}
                setEditorState={setEditorState}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
