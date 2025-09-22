import { useState } from "react";
import { LOGO_URL } from "../utilis/constants";

const Header = () => {
  let [btnName, setbtnName] = useState("login");
  const handlebtn = () => {
    btnName === "login" ? setbtnName("logout") : setbtnName("login");
    console.log(btnName);
  };
  return (
    <div className="margin">
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
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
