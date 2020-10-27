/*import fichiers react node_modules */
/*import CSS*/
/*import JS*/ 
import React from "react";
import "../css/Body.css";

function Body() {
  return (
    <>
      <h1 className="m-3">Liste de tâches</h1>
      <ul className="list-group m-3">
        <li className="list-group-item d-flex align-items-center">
          Ranger la vaisselle
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex align-items-center">
          Répondre appel d'offres
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex align-items-center">
          Signer contrat
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex align-items-center">
          Ranger le salon
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
      </ul>
    </> //ceci est un fragment !
  );
}

export default Body;