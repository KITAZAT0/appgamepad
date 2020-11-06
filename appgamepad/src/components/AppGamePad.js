/*import fichiers react node_modules */
/*import CSS*/
/*import JS*/
import React from "react";


import NavBarUp from "./NavBarUp.js";
import Footer from "./Footer.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewUser from "./NewUser";
import Accueil from "./Accueil.js";
import LoginUser from "./LoginUser.js";
import DelogUser from "./DelogUser.js";
import TopArrow from "./TopArrow.js";

/* import ContextBL from "./ContextBL"; */ /* import du fichier ContextBL */

function AppGamePad() {

 /*  const number = '6'; 
  const ecu = '8';
  const top = '4'; */
  //variable d'exemple pour le state et context


 /*  const valeurcontext = {number, ecu, top}; */ // les variables ci-dessus sont intégré à valeurcontext
  return (
    <section>
      {/* <ContextBL.Provider value={valeurcontext}> */}
      {/* contextBL fait référence à l'import, valeurcontext fait référence à la variable */}
      <BrowserRouter>
        <NavBarUp /* nombre={number} */ />
        <Switch>
          <Route exact path="/" render={(props) => <Accueil {...props} />} />
          <Route path="/new-user" render={(props) => <NewUser {...props} />} />
          <Route path="/log" render={(props) => <LoginUser {...props} />} />
          <Route path="/delog" render={(props) => <DelogUser {...props} />} />
        </Switch>
      </BrowserRouter>
      <TopArrow />
      <Footer />

      {/*  </ContextBL.Provider> */}
      {/* tout ce qui est à l'interieur de <ContextBL.Provider> et </ContextBL.Provider> pourra utiliser les variables de ContextBL  */}
    </section>
  );
}

export default AppGamePad;
