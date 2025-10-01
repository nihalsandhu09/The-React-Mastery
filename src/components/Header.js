import { useState, useEffect } from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
const Header = () => {
  let [btnName, setbtnName] = useState("login");
  const handlebtn = () => {
    btnName === "login" ? setbtnName("logout") : setbtnName("login");
  };
  const onlineStatus = useOnlineStatus();
  useEffect(() => {}, []);
  return (
    <div className="margin">
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
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
            <li>Cart</li>
            <button className="login" onClick={handlebtn}>
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
