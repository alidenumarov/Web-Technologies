import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import {Router, Route} from 'react-router';
// import ContactList from './contact_list'

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Hello</h1>
      </div>
      // <Router>
      //   {/* <Route /> */}
      // </Router>  
    );
    // <Router>
    //   <Route />
    // </Router>
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
}

export default App;
