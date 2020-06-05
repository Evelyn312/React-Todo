// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Task from "./Task";

const TaskList = props => {
    return(
        <div className="list">
            
          
            {console.log("this is the taskList from props", props.tasklist)}
            {
                props.tasklist.map( task => (
                    <Task key={task.id} task={task} toggleTask={props.toggleTask}/>
                ))
            }
            <button onClick={props.removeCompleted}>Remove Completed</button>

        </div>
    );
};

export default TaskList;