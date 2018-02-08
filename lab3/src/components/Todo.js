import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';
import TodoPriority from './components/todoPriority';

export class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        todos: [
          {id: 0, text: "asd", priority: 5},
          {id: 1, text: "qwe", priority: 2},
          {id: 2, text: "zxc", priority: 8},
        ],
        nextId: 3,
        nextPriority: Math.floor(Math.random() * 10) + 1
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    // this.editTodo = this.editTodo.bind(this);
    // this.saveTodo = this.saveTodo.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.savePr = this.savePr.bind(this);
    this.sortTodo = this.sortTodo.bind(this);
  }

  addTodo(todoText) {
    // let chTodo = this.state.todos.find(function(curElem) {
    //   return curElem.text === todoText;
    // });
    var chTodo;
    var ch = false;
    for(var cur = 0; cur < this.state.todos.length; cur++) {
      if(this.state.todos[cur].text === todoText) {
        ch = true;
        break;
      }
    }
    if(ch === false) {
        var todos = this.state.todos;
        todos.push({id: this.state.nextId, text: todoText, priority: this.state.nextPriority});
        this.setState({
          todos: todos,
          nextId: this.state.nextId + 1,
          nextPriority: Math.floor(Math.random() * 10) + 1
        });
    }
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  }

  sortTodo(sortedTodos) {
    this.setState({
      todos: sortedTodos
    });
  }

  saveTask(oldTask, newTask) {
    var token = this.state.todos.find(function(curTask) {
      return curTask.text === oldTask;
    });
    token.text = newTask;
    this.setState({todos: this.state.todos})
  }

  savePr(oldPr, newPr) {
    var token = this.state.todos.find(function(curTask) {
      return curTask.priority === oldPr;
    });
    token.priority = newPr;
    this.setState({todos: this.state.todos})
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
            <Header />
            <TodoInput todoText="" addTodo={this.addTodo}
            />
            <TodoPriority todoToPriority={this.state.todos}
                      sortTodo={this.sortTodo}/>
            <ul>
              {
                this.state.todos.map((todo) => {
                  return <TodoItem todo={todo} key={todo.id} 
                            todos={this.state.todos}
                            id={todo.id} 
                            removeTodo={this.removeTodo} 
                            // saveTodo={this.saveTodo}
                            // editTodo={this.editTodo}
                            priority={todo.priority}
                            saveTask={this.saveTask}
                            savePr={this.savePr}
                            text={todo.text} />
                })
              }
            </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
