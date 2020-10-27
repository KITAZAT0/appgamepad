import React from 'react';
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <>
            <header className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                <div
                    className="btn-group">
                    <NavLink exact={true} to="/" className="btn btn-outline-dark bg-light"> {/* exact={true} veut dire qu'il faut que le path soit exactement celui qui est défini en l'occurence le "/" */}
                        <FaListAlt />
                    </NavLink>
                    <NavLink to="/completed" className="btn btn-outline-dark bg-light">
                        <FaCheckSquare />
                    </NavLink>
                    <NavLink to="/add-task" className="btn btn-outline-dark bg-light" >
                        <FaPlusSquare />
                    </NavLink >
                </div >
                <button className="btn btn-outline-dark bg-light">
                    <FaTrash /></button>
            </header >
        </>
    );
}

export default NavBar;