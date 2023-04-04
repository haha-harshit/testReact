import React from "react";
import ReactDOM from "react-dom/client";

// this is core of react
// at core react create elements which is javascript object and then it is rendered to DOM as html
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "hi i am h1 tag")
//   )
// );

// INTRO to JSX
// JSX is NOT HTML
// JSX is HTML-like || XML-like syntax used to creat react elements
// jsx improves readability of react elements which if we do by core syntax will be complex for large code bases.
// HOW jsx works?
// JSX to React.createElement by BABEL, then from react element which is object to HTML element when rendered to DOM

const jsxHeading = <h1>Hey from JSX</h1>;

const Title = () => <h1 className="title">Hey React</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Hola Component</h1>
  </div>
);

const heading = React.createElement("h1", {}, "hey from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
