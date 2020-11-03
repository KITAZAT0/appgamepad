import React from 'react';

function ToDo(props) {
    return (
        <>
        <li className="list-group-item d-flex align-items-center">
            {props.tasks.name}
        <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        </>
    );
}



export default ToDo;
