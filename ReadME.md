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

# Episode 2



# parcel 
 Parcel Features

Dev Build → Provides development builds with fast startup.

Local Server → Runs a local server to preview your app in real time.

HMR (Hot Module Replacement) → Updates only the changed modules in the browser without full reload.

File Watching Algorithm → Written in C++ for high performance.

Caching → Stores previous build outputs for faster rebuilds.

Image Optimization → Handles compression and optimization of images (an expensive operation done efficiently).

Minification → Reduces file size by removing whitespace, comments, and unused code.

Bundling → Combines multiple files/modules into a single bundle for deployment.

Compressing → Shrinks the final bundle size (e.g., gzip, brotli).

Consistent Hashing → Generates stable file hashes for cache-busting.

Code Splitting → Splits code into smaller chunks, loaded only when needed.

Differential Bundling → Generates different bundles for modern and older browsers.

Diagnostics → Provides detailed error messages with code frames and hints.

Error Handling → Friendly error reporting during development.
 
- Tree Shaking 

- Different dev and production bundles


# JSX 
 * import React from "react";
import ReactDOM from "react-dom/client";

// React Element = React.createElement => Object => render =>HTMLElEMENT

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react"
);
console.log(heading);

// JSX (transpiled before it reaches to js engine) parcel => Babel =>  => React.createElemnt => render => (HTML)
let h1 = <h1>Hellow world</h1>
console.log(h1)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h1);
 

 # Components 
  * // React Components
// class based component - OLD
// functional components  - New
//  functional components are just a js function that return us a some piece of jsx
function Heading() {
  return (
    <>
      <h1>Functional Component </h1>
    </>
  );
} 


# Food APP 


 - /** we will design first like how our app look like
 * Header components
 * -logo
 * - nav item
 * - cart
 * Body Compoennt - serach bar -Restaurant container - Restarant Card
 *  - img name of res , star rating , cuisine
 * footer copy right
 */


 Two types of EXPORT/Import 

 Default Export / import 
 - export default name of component 
 import variable from path 

 - named export 
  export const component 
  import {component} from "path"