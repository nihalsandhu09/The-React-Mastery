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

- {
/\* <div id="parent">
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

- import React from "react";
  import ReactDOM from "react-dom/client";

// React Element = React.createElement => Object => render =>HTMLElEMENT

const heading = React.createElement(
"h1",
{ id: "heading" },
"Hello world from react"
);
console.log(heading);

// JSX (transpiled before it reaches to js engine) parcel => Babel => => React.createElemnt => render => (HTML)
let h1 = <h1>Hellow world</h1>
console.log(h1)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h1);

# Components

- // React Components
  // class based component - OLD
  // functional components - New
  // functional components are just a js function that return us a some piece of jsx
  function Heading() {
  return (
  <>
  <h1>Functional Component </h1>
  </>
  );
  }

# Food APP

- /\*\* we will design first like how our app look like

* Header components
* -logo
* - nav item
* - cart
* Body Compoennt - serach bar -Restaurant container - Restarant Card
* - img name of res , star rating , cuisine
* footer copy right
  \*/

Two types of EXPORT/Import

Default Export / import

- export default name of component
  import variable from path

- named export
  export const component
  import {component} from "path"

# React Hooks

- (normal js utilty function written by FB developers )
- Two main Hooks
- useState - to superpowerful state variables in React
- useEffect

# APP Code -

- - / import RestaurantCard from "./RestaurantCard";
    import { useEffect, useState } from "react";
    import Shimmerui from "./Shimmerui";
    const Body = () => {
    const [listofRestaurant, setlistofRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [filteredrestaurant, setfilteredrestaurant] = useState([]);
    console.log("Body rendered");

    const fetchData = async () => {
    try {
    const data = await fetch(
    "https://www.swiggy.com/mapi/restaurants/list/v5?offset=16&is-seo-homepage-enabled=true&lat=12.9628669&lng=77.57750899999999&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(json);
    const cards = json?.data?.cards || [];
    let restaurantCard;

          for (let card of cards) {
            if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
              restaurantCard =
                card.card.card.gridElements.infoWithStyle.restaurants;
              break;
            }
          }

          console.log(restaurantCard);
          setlistofRestaurants(restaurantCard);
          setfilteredrestaurant(restaurantCard);
        } catch {
          return <h1>Api call did not work</h1>;
        }

    };

    // api calls are always inside
    useEffect(() => {
    fetchData();
    }, []);
    // filter to select high rating
    const filter = () => {
    const filtedlist = listofRestaurant.filter(
    (restaurant) => restaurant.info.avgRating > 4.4
    );
    setlistofRestaurants(filtedlist);
    };

    // conditional rendring rendring on the basis of condition is called conditional rendring

    return listofRestaurant.length === 0 ? (
    <Shimmerui />
    ) : (
    <div className="margin">
    <div className="body ">
    <div className="filter">
    <button className="filter-btn " onClick={filter}>
    {" "}
    Top Rated Restaurants
    </button>
    <div>
    <div className="search">
    <input
    className="searchbox"
    type="text"
    value={searchText}
    onChange={(e) => {
    setsearchText(e.target.value);
    console.log(searchText);
    }}
    />
    <button
    className="search-btn"
    onClick={() => {
    // filter the restaurant cards and update the ui
    const filterrestaurant = listofRestaurant.filter(
    (restaurant) =>
    restaurant?.info?.name
    .toLowerCase()
    .includes(searchText.toLowerCase())
    );
    setfilteredrestaurant(filterrestaurant);
    }} >
    Search
    </button>
    </div>
    </div>
    </div>

            <div className="restaurant-container">
              {filteredrestaurant.map((restaurant) => {
                return (
                  <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                );
              })}
            </div>
          </div>
        </div>

    );
    };
    export default Body;

# Two types of routing

- client side
- server side

# Redux Toolkit

- install @redux/toolkit and react-redux
- Build Our Store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector
