import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Kenai" animal="Dog" breed="Alaskan Malamute" />
      <Pet name="Nanook" animal="Dog" breed="Alaskan Malamute" />
      <Pet name="Mya" animal="Dog" breed="Alaskan Malamute" />
    </div>
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
