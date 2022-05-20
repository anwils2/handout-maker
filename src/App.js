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
  const [holderWidth, setHolderWidth] = useState(50);
  const [holderHeight, setHolderHeight] = useState(50);

  function setHolderSize(width, height) {
    setHolderWidth(width);
    setHolderHeight(height);
  }

  const downloadHandout = () => {
    domtoimage
      .toPng(document.getElementById("holder"), {
        width: holderWidth,
        height: holderHeight,
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
              <HandoutViewer
                textElementsOnHandout={textElementsOnHandout}
                setHolderSize={setHolderSize}
              />
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
      <footer>
        <div className="fixed-bottom bg-secondary text-light text-center py-3">
          <span>Handout Maker - Andrew Wilson ©2022</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
