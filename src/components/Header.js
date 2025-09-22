import { useState, useEffect } from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router-dom";
const Header = () => {
  let [btnName, setbtnName] = useState("login");
  const handlebtn = () => {
    btnName === "login" ? setbtnName("logout") : setbtnName("login");
    console.log(btnName);
  };
  console.log("header rendered");
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <div className="margin">
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
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
