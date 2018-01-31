import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react';
import dembele from './images/dembele.jpg';
import iniesta from './images/iniesta.jpg';
import busquets from './images/busquets.jpg';
import suarez from './images/suarez.jpg';
import racitic from './images/racitic.jpg';
import umtiti from './images/umtiti.jpg';
import messi from './images/messi.jpg';
import pique from './images/pique.jpg';
import starr1 from './images/star1.jpg';
import starr2 from './images/star2.jpg';
import Star from './Star';

var contact = [
  {
    id: 1,
    name: 'Ousmane Dembele',
    number: '11',
    image: dembele,
    star: starr1,
    star2: starr2
    // label: 'DDDDEEEEMMMBBBEEEELELLEEL'
  },
  {
    id: 2,
    name: 'Andres Iniesta',
    number: '8',
    image: iniesta,
    star: starr1,
    star2: starr2
    // label: 'IIIIIIIIINNNENEESSTAAA'
  },
  {
    id: 3,
    name: 'Sergio Busquets',
    number: '5',
    image: busquets,
    star: starr1,
    star2: starr2
  },
  {
    id: 4,
    name: 'Luis Suarez',
    number: '9 ',
    image: suarez,
    star: starr1,
    star2: starr2
  },
  {
    id: 5,
    name: 'Samuel Umtiti',
    number: '23',
    image: umtiti,
    star: starr1,
    star2: starr2
  },
  {
    id: 6,
    name: 'Lionel Messi',
    number: '10',
    image: messi,
    star: starr1,
    star2: starr2
  },
  {
    id: 7,
    name: 'Ivan Racitic',
    number: '4',
    image: racitic,
    star: starr1,
    star2: starr2
  },
  {
    id: 8,
    name: 'Gerard Pique',
    number: '3',
    image: pique,
    star: starr1,
    star2: starr2
  },
];

function searchingFor(txt) {
  return function(x) {
    return x.name.toLowerCase().includes(txt.toLowerCase());
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      contact: contact ,
      srchText: '',
    }
    
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(txt) {
    this.setState({srchText: txt.target.value})
  }
  render() {
    return (
      <div className="App">
          <form>
            <input type="search" className="input"
                    onChange={this.searchHandler}
                    value={this.state.srchTxt}
            />
          </form>
          {
            this.state.contact.filter(searchingFor(this.state.srchText)).map(function(contact) {
              return(
                <div key={contact.id} className="item">
                  <h3 className="name">{contact.name}</h3>
                  <p className="number">{contact.number}</p>
                  <img className="img" src={contact.image} alt="Image" />
                  {/* <Star /> */}
                </div>
              )
            })
          }
      </div>
    );
  }
}

export default App;
