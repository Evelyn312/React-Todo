import React from 'react';
// import ReactDOM from "react-dom";


import TodoForm from "./components/TodoForm";
import TaskList from "./components/TaskList";


const taskList=[
  {
    task: "organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "bake cookies",
    id: 1528817084358,
    completed: false

  }
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      taskList: taskList
    };
  };

  addTask = (e, task) =>{
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskList: [...this.state.taskList, newTask]
   
    });
   
  }

  toggleTask = taskId => {
    console.log("this is the taskId", taskId);
    this.setState({
      taskList: this.state.taskList.map(task => {
        if (taskId === task.id){
          return{
            ...task, completed: !task.completed
          };
        }
        return task
      })
    });
  }

  removedCompleted = e => {
    e.preventDefault();
    this.setState({
      taskList: this.state.taskList.filter( item => !item.completed)
    });
  }
  

  render() {
    return (
      <div className="container">
        <TodoForm addTask={this.addTask}/>
        <TaskList 
          tasklist={this.state.taskList} 
          removeCompleted={this.removedCompleted}
          toggleTask={this.toggleTask}  
        />
      </div>
    );
  }
}

export default App;
