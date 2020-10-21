import React from "react";
//import logo from './logo.svg';
import "../css/NewUser.css";
//import { FaListAlt, FaCheckSquare, FaPlusSquare,  FaTrash,} from "react-icons/fa";


function handleSubmit() {}

function newUser() {}


function NewUser() {
  return (
    <>
      <section>
        <h1 className="m-3">userName</h1>
        <div className="card mx-3">
          <form
            /* method="post" */ className="card-body"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="form-group">
              <label form="userName">username</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                id="userName"
                required
                ref={newUser}
              />
              <label form="userPassword">password</label>
              <input
                type="text"
                className="form-control"
                name="userPassword"
                id="userPassword"
                required
                ref={newUser}
              />
              <label form="userEmail">email</label>
              <input
                type="text"
                className="form-control"
                name="userEmail"
                id="userEmail"
                required
                ref={newUser}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Créer un compte
            </button>
          </form>
        </div>
      </section>
    </> //ceci est un fragment !
  );
}

export default NewUser;
