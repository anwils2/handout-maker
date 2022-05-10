import React from "react";

function TextInput() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="TextInput">
      <header className="App-header">
        <p>User text will be here eventually</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </header>
      <p>{count}</p>
    </div>
  );
}

export default TextInput;
