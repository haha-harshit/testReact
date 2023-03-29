const root = ReactDOM.createRoot(document.getElementById("root"));

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
root.render(parent);
