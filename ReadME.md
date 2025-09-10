# how we create element with react

- let h1 = React.createElement(
  "h1",
  { id: "heading", abc: "attributr" },
  "Hello world"
  );
  console.log(h1); //object
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(h1);

# how to create nested elemnts with React

- {
/\* <div id="parent">
<div id="child">
<h1></h1>
</div>
</div> */
}
// ReactElement(Object) => HTML(browser understand)

const parent = React.createElement(
"div",
{ id: "parent" },

React.createElement(
"div",
{ id: "child" },
React.createElement("h1", {}, "i am h1 tag")
)
);
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

# if you have to create something like this 2 tags like you have to pass it as a araay of childrens

/\* <div id="parent">
<div id="child">
<h1>i am h1</h1>
<h2>i am h2</h2>
</div>

</div> */

// ReactElement(Object) => HTML(browser understand)

const parent = React.createElement(
"div",
{ id: "parent" },

React.createElement("div", { id: "child" }, [
React.createElement("h1", {}, "i am h1 tag"),
React.createElement("h2", {}, "i am h2 tag"),
])
);
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


# if we have to structure like this like two childs same way we have to pass it as an array 
 * {
  /* <div id="parent">
    <div id="child">
        <h1>i am h1</h1>
        <h2>i am h2</h2>
    </div>
    <div id="child2">
        <h1>i am h1</h1>
        <h2>i am h2</h2>
    </div>
</div> */
}
// ReactElement(Object) => HTML(browser understand)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
]);
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
