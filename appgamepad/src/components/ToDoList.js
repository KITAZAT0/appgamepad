import React from "react";
import ToDo from "./ToDo";
/* function ToDoList(props) {
    return (
        <>
            <ul className="list-group m-3">
                {props.tasks.map(task, index) =>
                <li key={index} className="list-group-item d-flex align-items-center">
                    {props.task.name}
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                }
            </ul>
        </>
    )
} */

function ToDoList(props) {
  console.log("props");
  console.log(props);
  let filteredTasks = [];
  console.log("filteredTasks avant le switch");
  console.log(filteredTasks);
  console.log("props.tasks");
  console.log(props.tasks);

  switch (props.match.params.filter) {
    case "completed":
      filteredTasks = props.tasks.filter((task) => task.completed === true);
      break;
    default:
      filteredTasks = props.tasks;
  }
console.log("filteredTasks apres le switch");
console.log(filteredTasks);
  return (
    <>
      {/* <ul className="list-group m-3">
        {props.tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex align-items-center">
            {task.name}
            <button className="btn btn-sm ml-auto btn-outline-success">
              &#x2713;
            </button>
          </li>
        ))}
      </ul>  */}
      <ul>
        {filteredTasks.length > 0
          ? filteredTasks.map((item, index) => {
            return (
              <ToDo
                cle={index}
                key={index}
                modif={props.modif}
                tasks={filteredTasks}
              />
            );
          })
          : "Aucune tâche à afficher."}
      </ul>
    </>
  );
}

export default ToDoList;
