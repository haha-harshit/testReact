import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hi i am h1 tag")
  )
);

// const heading = React.createElement("h1", {}, "hey from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
