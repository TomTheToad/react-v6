// React import is not neccessary with new version of Babel
// Keeping import for consistency but will remove from other components
import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));
