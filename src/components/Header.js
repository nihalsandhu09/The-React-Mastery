import { useState } from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utilis/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  let [btnName, setbtnName] = useState("login");
  const handlebtn = () => {
    btnName === "login" ? setbtnName("logout") : setbtnName("login");
  };
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  console.log(data);
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="margin">
      <div className="header flex items-center justify-between">
        <div className="logo-container">
          <img className="logo w-24" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul className="flex gap-4">
            <li>Online Status: {onlineStatus ? "✅" : "⛔"}</li>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="link" to="/grocery">
                Grocery
              </Link>
            </li>
            <Link className="link" to={"/cart"}>
              <li>Cart ({cartItems.length}) </li>
            </Link>
            <button className="login" onClick={handlebtn}>
              {btnName}
            </button>
            <li>{data.loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
