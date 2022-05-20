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
  const [bkgIndex, setBkgIndex] = useState(0);

  const backgrounds = ["pamphlet.jpg", "paper.jpg", "scroll.jpg"];

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
      <div className="container-fluid py-5">
        <div className="row">
          <div className="bkg-select col"></div>
          <div className="row">
            <div className="col-7">
              <HandoutViewer
                textElementsOnHandout={textElementsOnHandout}
                setHolderSize={setHolderSize}
                background={backgrounds[bkgIndex]}
              />
            </div>
            <div className="col-1" />
            <div className="col-4">
              <div className="d-grid gap-2">
                <div className="row g-0">
                  <button
                    type="button"
                    className="btn col-2 btn-secondary"
                    onClick={() => {
                      setBkgIndex(
                        bkgIndex === 0 ? backgrounds.length - 1 : bkgIndex - 1
                      );
                    }}
                  >
                    &#x27E8;
                  </button>
                  <div className="col-8 text-center">
                    <span>Select Background</span>
                  </div>
                  <button
                    type="button"
                    className="btn col-2 btn-secondary"
                    onClick={() => {
                      setBkgIndex(
                        bkgIndex === backgrounds.length - 1 ? 0 : bkgIndex + 1
                      );
                    }}
                  >
                    &#x3009;
                  </button>
                </div>
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
