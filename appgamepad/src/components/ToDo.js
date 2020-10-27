import React from 'react';

function ToDo(props) {
    return (
        <>
        <li className="list-group-itemd-flexalign-items-center">
            {props.task.name}
        <button className="btnbtn-smml-autobtn-outline-success">&#x2713;</button>
        </li>
        </>
    );
}



export default ToDo;
