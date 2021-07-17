import React from 'react';
import ReactDOM from 'react-dom';


const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Kenai",
      animal: "Dog",
      breed: "Alaskan Malamute",
    }),
    React.createElement(Pet, {
      name: "Nanook",
      animal: "Dog",
      breed: "Alaskan Malamute",
    }),
    React.createElement(Pet, {
      name: "Mya",
      animal: "Dog",
      breed: "Alaskan Malamute",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
