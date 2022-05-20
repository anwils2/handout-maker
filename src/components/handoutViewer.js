import { useEffect, useState, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import Draggable from "react-draggable";
import DraggableText from "./draggableText";

const backgroundsPath = process.env.PUBLIC_URL + "/backgrounds/";

function HandoutViewer({ textElementsOnHandout, setHolderSize, background }) {
  const holderRef = useRef(null);

  const backgrounds = ["pamphlet.jpg", "paper.jpg"];

  function setHolderSizeOnImageLoad() {
    const width = holderRef.current.offsetWidth;
    const height = holderRef.current.offsetHeight;
    setHolderSize(width, height);
  }

  return (
    <div className="HandoutViewer">
      <div
        ref={holderRef}
        id="holder"
        className="row holder"
        style={{
          backgroundImage: `url('${backgroundsPath}${background}`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          id="note-bkg-img"
          src={`${backgroundsPath}${background}`}
          onLoad={setHolderSizeOnImageLoad}
        />
        <div className="position-absolute">{textElementsOnHandout}</div>
      </div>
    </div>
  );
}

export default HandoutViewer;
