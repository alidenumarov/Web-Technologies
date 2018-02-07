import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isEditing: false
        };
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    renderTodoChangeSection() {
        const task = this.props.text;
        if(this.state.isEditing) {
            return(
                <form onSubmit={this.onSaveClick}>
                    <input className="inputChange" type="text" ref="editInput" defaultValue={task}/>
                </form>
            );
        }
    }

    renderItemActionSection() {
        const priority = this.props.priority;        
        if(this.state.isEditing) {
            return(
                <td>
                    <input className="inputPriority" type="text" ref="editPriority" defaultValue={priority}/>
                    <button className="bnSave" onClick={this.onSaveClick}>Save</button>
                </td>
            );
        }

        return(
            <div className="todoWrapper">
                <b className="priority">{this.props.todo.priority}</b>
                <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>Delete</button>
                <button className="bnEdit" onClick={(e) => this.editTodo(this.props.id)}>Edit</button>
                {this.props.todo.text}
            </div>
        );

    }

    onSaveClick() {
        const oldTask = this.props.text;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);

        const oldPr = this.props.priority;
        const newPr = this.refs.editPriority.value;
        this.props.savePr(oldPr, newPr);

        this.setState({isEditing: false});
        // alert("ok");
    }
    removeTodo(id) {
        this.props.removeTodo(id);
    }

    editTodo(id) {
        this.setState({isEditing: !this.state.isEditing});
        // this.props.editTodo(id);
    }

    render() {
        return(
            <tr>
                {this.renderItemActionSection()}
                {this.renderTodoChangeSection()}
            </tr>
            // <div className="todoWrapper">
            //     <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>Delete</button>
            //     <button className="bnEdit" onClick={(e) => this.editTodo(this.props.id)}>Edit</button>
            //     {this.props.todo.text}
            // </div>
        );
    }
}