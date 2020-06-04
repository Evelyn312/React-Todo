import React from "react";

class TodoForm extends React.Component {

    constructor(){
        super();
        this.state = {
            task: ''
        };
    };
    handleChanges = e => {
     
        this.setState({ [e.target.name]: e.target.value});
        console.log("This is the task input", this.setState);
    };

    submitTask = e => {
        e.preventDefault();
        this.setState({task: ""});
        this.props.addTask(e, this.state.task)
    };

    render(){
        return(
            <form onSubmit={this.submitTask}>
                <label>
                    Task
                    <input
                        type="text"
                        value={this.state.task}
                        name="task"
                        onChange={this.handleChanges}
                        placeholder="Task"
                    />
                </label>
                <button>Add</button>
            </form>
        );
    }

};

export default TodoForm;