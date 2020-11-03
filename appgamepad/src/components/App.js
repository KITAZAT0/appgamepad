import React, { useState } from "react";
//import logo from './logo.svg';
import "../css/App.css";
import NavBar from "./Navbar.js";
import ToDoList from "./ToDoList.js";
import AddTask from "./AddTask.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import initialData from "../data/initialData.js";


function App() {

  const [tasks, setTasks] = useState(initialData);

  function modifTask(newTask) {
    setTasks(newTask);
  }

  return (
    <section id="todo">
      <h1 className="m-3">Liste de tâches</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/add-task" component={AddTask} />
          <Route path="/:filter?" render={(props)=> <ToDoList{...props} modif={modifTask} tasks={tasks}/>}/>
        </Switch>
        <NavBar />
      </BrowserRouter>
    </section>
  );
}

export default App;
