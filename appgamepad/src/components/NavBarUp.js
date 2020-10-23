/*import fichiers react node_modules */
import React from "react";
import { FaListAlt, FaPlusSquare, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
/*import CSS*/
import "../css/NavbarUp.css";
/*import JS*/ 




function NavBarUp() {
  return (
    <>
      <header
        className="d-flex justify-content-between bg-secondary p-3"
        id="mainHeader"
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
         <NavLink to="/login-delog" className="btn btn-outline-dark bg-light">
            <FaPlusSquare />
          </NavLink>
        </div>
        <button className="btn btn-outline-dark bg-light">
          <FaTrash />
        </button>
      </header>
    </>
  );
}

export default NavBarUp;
