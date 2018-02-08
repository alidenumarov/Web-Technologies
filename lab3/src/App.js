import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Root} from './components/Root'
import {Home} from './components/Home'
import {User} from './components/User'
import {ContactList} from './components/ContactList';
import {Todo} from './components/Todo'

// import {} from './'

class App extends Component {
  render() {
    return(
        <Router history={browserHistory}>
          <Route path={"/"} component={Root}>
            <IndexRoute component={Home}/>
            {/* <Route path={"user"} component={User}/> */}
            <Route path={"home"} component={Home}/>
            <Route path={"contact_list"} component={ContactList}/>
            <Route path={"todo"} component={Todo}/>
          </Route>
        </Router>
    );
  }
}

export default App;
