import "./App.css";
import { EditorState } from "draft-js";
import TextInput from "./components/input";
import HandoutViewer from "./components/handoutViewer";
import { useState, useEffect, useRef } from "react";
import domtoimage from "dom-to-image";

function App() {
  const downloadHandout = () => {
    domtoimage
      .toPng(document.getElementById("holder"))
      .then(function (dataUrl) {
        let link = document.createElement("a");
        link.download = "handout.png";
        link.href = dataUrl;
        link.click();
      });
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
              <HandoutViewer />
            </div>
            {/* <div className="col-6">
              <TextInput
                editorState={editorState}
                setEditorState={setEditorState}
              />
            </div> */}
          </div>
        </div>
        <div className="row">
          <button onClick={downloadHandout}>Download</button>
        </div>
      </div>
    </div>
  );
}

export default App;
