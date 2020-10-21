import React from 'react';
import '../css/AppGamePad.css';
import NavBarUp from "./NavBarUp.js";
import Body from "./Body.js";
import NavBarDown from "./NavBarDown.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewUser from './NewUser';

function AppGamePad() {
  return (
    <section id="todo">
      <h1 className="m-3">choix</h1>
      <BrowserRouter>
        <NavBarUp />
        <Switch>
          <Route path="/new-user" component={NewUser} />
          {/* <Route path="/:filter?" component={ToDoList} /> */}
        </Switch>
        <NavBarDown />
      </BrowserRouter>
      <Body />
    </section>
  );
}

export default AppGamePad;
