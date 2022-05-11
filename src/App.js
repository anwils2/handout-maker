import "./App.css";
import TextInput from "./components/input";

const backgroundsPath = process.env.PUBLIC_URL + "/backgrounds/";

function App() {
  return (
    <div>
      <header>
        <h2>Handout Maker</h2>
      </header>
      <div className="container">
        <div className="row">
          <div className="bkg-select col">
            <img src={`${backgroundsPath}pamphlet.jpg`} />
          </div>
          <div className="row">
            <div className="col">
              <TextInput />
            </div>
            <div className="col">
              <TextInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
