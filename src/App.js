import "./App.css";
import { EditorState } from "draft-js";
import TextInput from "./components/input";
import HandoutViewer from "./components/handoutViewer";

const backgroundsPath = process.env.PUBLIC_URL + "/backgrounds/";

// push up editorState

function App() {
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
              <TextInput />
            </div>
            <div className="col">
              <HandoutViewer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
