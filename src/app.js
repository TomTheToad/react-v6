// React import is not neccessary with new version of Babel
// Keeping import for consistency but will remove from other components
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; 
import { StrictMode } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <Router>
      <header>
        <Link to="/">
          <h1>Adopt Me!</h1>
        </Link>
      </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          < Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));
