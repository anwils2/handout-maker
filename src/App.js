import './App.css';
import TextInput from './components/input';

function App() {
  return (
    <div>
      <header>
        <h2>Handout Maker</h2>
      </header>
      <div style={{display:"flex"},{flexDirection:"row"}}>
        <TextInput />
        <TextInput />
      </div>
    </div>

  );
}

export default App;
