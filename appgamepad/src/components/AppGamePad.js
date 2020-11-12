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


function AppGamePad() {

  return (
    <section>
      <BrowserRouter>
        <NavBarUp/>
        <Switch>
          <Route exact path="/" render={(props) => <Accueil {...props} />} />
          <Route path="/new-user" render={(props) => <NewUser {...props} />} />
          <Route path="/log" render={(props) => <LoginUser {...props} />} />
          <Route path="/delog" render={(props) => <DelogUser {...props} />} />
        </Switch>
      </BrowserRouter>
      <TopArrow />
      <Footer />
    </section>
  );
}

export default AppGamePad;
