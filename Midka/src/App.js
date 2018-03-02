import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Item from './components/Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        items: [
          {id: 0, text: "Home", isClicked: false},
          {id: 1, text: "About", isClicked: false},
          {id: 2, text: "Contact", isClicked: false},
        ]
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (id) => {
    for(var i = 0; i < this.state.items.length; i++) {
      if(id === this.state.items[i].id) {
        this.setState({isClicked: true});
        
        alert("clicked " + this.state.items[i].id);
        
      } else if(id !== this.state.items[i].id){
        this.setState({isClicked: false});
        alert("uncliked " + this.state.items[i].id);
      }
    }
  }
  render() {
    return (
      <div className="App">
            <ul>
              {
                this.state.items.map((item) => {
                  return <Item item={item} key={item.id} 
                            items={this.state.items}
                            id={item.id}
                            text={item.text}
                            onClick={this.handleClick}
                            isClicked={item.isClicked}/>
                })
              }
            </ul>
      </div>
    );
  }
}

export default App;
