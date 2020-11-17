/*import fichiers react node_modules */
import React, {useState, /* useContext */} from "react";
import { FaListAlt, FaPlusSquare, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
/*import JS*/
/* import ContextBL from "./ContextBL"; */ //met à disposition le fichier react context


function NavBarUp() {
  const [connect, /* setConnect */] = useState(true);  // exemple de State

 /*  const { number, ecu, top } = useContext(ContextBL); */ //principe de la variable global, variables qui viennent depuis AppGamePad, tres pratique pour aller loin dans la parenté sans devoir passé les props manuellement
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
         <NavLink to= {connect === true ? "/delog" : "/log"} // si connect est identique à true alors j'affiche la route delog sinon j'affiche log
         className="btn btn-outline-dark bg-light"> 
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
