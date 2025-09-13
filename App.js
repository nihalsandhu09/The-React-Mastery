import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 className=" heading">Hellow world</h1>;
console.log(title);
const number = 100000;
const Heading = () => {
  return (
    <>
      <div>{title}</div>
      <h1>Functional Component </h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
