import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        todos: [
          {id: 0, text: "Change password"},
          {id: 1, text: "Learn React"},
          {id: 2, text: "Do Labs SysProg"},
        ],
        nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

  }

  addTodo(todoText) {
    var todos = this.state.todos;
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: this.state.nextId + 1
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  }
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
            <Header />
            <TodoInput todoText="" addTodo={this.addTodo}/>
            <ul>
              {
                this.state.todos.map((todo) => {
                  return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
                })
              }
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
