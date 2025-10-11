import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utilis/UserContext";
import Shimmerui from "./components/Shimmerui";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

// Chunking
// Code splitting
// Dynmic Bundling
//Lazy Loading
// on demand loading

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  // authenitcation
  const [userName, setUserName] = useState();

  useEffect(() => {
    //  make an api call and send username and password
    const data = {
      name: "Nihal Sandhu",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <Header />

          {/** if path is / then we shoould have body  */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmerui></Shimmerui>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmerui></Shimmerui>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
