// React import is not neccessary with new version of Babel
// Keeping import for consistency but will remove from other components
import React from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Kenai" animal="Dog" breed="Alaskan Malamute" />
      <Pet name="Nanook" animal="Dog" breed="Alaskan Malamute" />
      <Pet name="Mya" animal="Dog" breed="Alaskan Malamute" /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
