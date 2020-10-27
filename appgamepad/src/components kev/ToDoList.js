/*import fichiers react node_modules */
/*import CSS*/
/*import JS*/ 
import React from "react";
import "../css/ToDoList.css";


 function ToDoList(props) {
    return (
        <>
            <ul className="list-group m-3">
                 {props.task.name} 
{
    props.tasks.map((task, index) =>
        <li key={index} className="list-group-item d-flex align-items-center">
            {task.name}
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
    )
}
            </ul >
        </>
    );
}


export default ToDoList;