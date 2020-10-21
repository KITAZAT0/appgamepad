import React from "react";
import "../css/NavbarUp.css";
import { FaListAlt, FaPlusSquare,  FaTrash,} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function NavBarUp() {
  return (
    <>
      <header
        className="d-flex justify-content-between bg-secondary p-3"
        id="mainHeader"
      >
        <div className="btn-group">
          <NavLink to="/"className="btn btn-outline-dark bg-light"><FaListAlt/></NavLink>
          <NavLink to="/new-user"className="btn btn-outline-dark bg-light"><FaPlusSquare/></NavLink>
        </div>
        <button className="btn btn-outline-dark bg-light">
          <FaTrash />
        </button>
      </header>
    </>
  );
}

export default NavBarUp;