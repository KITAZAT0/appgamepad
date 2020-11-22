/*import fichiers react node_modules */
import React, {useState} from "react";
import { FaListAlt, FaPlusSquare } from "react-icons/fa";
import { RiLogoutBoxRFill, /* RiLoginBoxFill */ } from "react-icons/ri";
import { CgDarkMode } from "react-icons/cg";
import { NavLink } from "react-router-dom";




function NavBarUp() {
  const [connect, /* setConnect */] = useState(true);  

 
  return (
    <>
      <header
        className="d-flex justify-content-between bg-secondary p-3"
        id="NavBarUp"
      >
        <div className="btn-group">
          <NavLink
            exact={true}
            to="/"
            className="btn btn-outline-dark bg-light"
          >
            <FaListAlt />
          </NavLink>
          <NavLink to="/new-user" className="btn btn-outline-dark bg-light">
            <FaPlusSquare />
          </NavLink>
          <NavLink
            to={connect === false ? "/delog" : "/log"} // si connect est identique à false alors j'affiche la route log sinon j'affiche delog
            className="btn btn-outline-dark bg-light"
          >
            <RiLogoutBoxRFill />
            {/* <RiLoginBoxFill /> */}
          </NavLink>
        </div>
        <button className="btn btn-outline-dark bg-light">
          <CgDarkMode />
        </button>
      </header>
    </>
  );
}

export default NavBarUp;