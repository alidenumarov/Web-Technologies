import React from 'react';

export default class TodoPriority extends React.Component {
    constructor() {
        super();
        this.state = {
            isPressed: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({isPressed: !this.state.isPressed});
        if(this.state.isPressed) {
            const prs = this.props.todoToPriority.sort(function(a, b) {
                return a.priority - b.priority;
            });
            console.log(prs);
            this.props.sortTodo(prs);
        } else {
            const prs = this.props.todoToPriority.sort(function(a, b) {
                return b.priority - a.priority;
            });
            console.log(prs);
            this.props.sortTodo(prs);
        }
    }

    render() {
        return(
            <label>
                <button onClick={this.handleClick}>{this.state.isPressed ? 'Sort' : 'Desort'}  </button> by Priority
            </label>
        );
    }
}