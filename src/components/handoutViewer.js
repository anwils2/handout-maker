import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import Draggable from "react-draggable";
import DraggableText from "./draggableText";

const backgroundsPath = process.env.PUBLIC_URL + "/backgrounds/";

function HandoutViewer({ textElementsOnHandout }) {
  // props from WYSIWYG comp

  return (
    <div className="HandoutViewer">
      <div id="holder" className="row holder">
        <img id="note-bkg-img" src={`${backgroundsPath}pamphlet.jpg`} />
        <div className="position-absolute">{textElementsOnHandout}</div>
      </div>
    </div>
  );
}

export default HandoutViewer;
