import React from "react";

const Task = props => {
    return (
        <div onClick={() => props.toggleTask(props.task.id)}>
            <p>{props.task.task}</p>
            
          
        </div>
    );
}

export default Task;