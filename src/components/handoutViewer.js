import React from "react";

const backgroundsPath = process.env.PUBLIC_URL + "/backgrounds/";

function HandoutViewer() {
  // props from WYSIWYG comp
  const [count, setCount] = React.useState(0);

  return (
    <div className="HandoutViewer">
      <div>
        <img src={`${backgroundsPath}pamphlet.jpg`} />
      </div>
    </div>
  );
}

export default HandoutViewer;
