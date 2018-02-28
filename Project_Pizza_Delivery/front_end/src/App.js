import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Pizzas from './components/Pizzas';
import Drinks from './components/Drinks';
import Snacks from './components/Snacks';
import Discounts from './components/Discounts';
import Contacts from './components/Contacts';
import Header from './components/Header'
/*import logos from './palermo-pizza-logo.jpeg';*/

class App extends Component {
  render() {
    return (
      <div className="header">
        <Header />
        <div className="header_menu">
          <Router>
            <div>
              <ul>
                <li><Link to="/">Pizzas</Link></li>
                <li><Link to="/drinks">Drinks</Link></li>
                <li><Link to="/snacks">Snacks</Link></li>
                <li><Link to="/discounts">Discounts</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                </ul>

                <Route exact path="/" component={Pizzas} />
                <Route exact path="/drinks" component={Drinks} />
                <Route exact path="/snacks" component={Snacks} />
                <Route exact path="/discounts" component={Discounts} />
                <Route exact path="/contacts" component={Contacts} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
