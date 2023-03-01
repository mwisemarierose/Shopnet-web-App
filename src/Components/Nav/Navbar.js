import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/Logo1.png";
function Navbar() {
  return (
    <nav>
      <div>
        <img src={Logo} className="logo" />
      </div>

      <div>
        <ul className="nav-links" style={{ fontSize: "18px" }}>
          <li style={{marginTop:'10px'}}>
            <NavLink to={"/login"}> Log In</NavLink>
          </li>
          <li>
            <NavLink to={"/signup"}>
              <button class="btn mt-3 text-white">Sign Up</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
