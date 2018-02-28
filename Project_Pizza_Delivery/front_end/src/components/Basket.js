import React from 'react';
import '../App.css';
import margarita from '../img/margarita.jpg';
import pepperoni from '../img/pepperoni.jpg';
import fourcheeses from '../img/fourcheeses.jpg';
import supermeat from '../img/supermeat.jpg';

class Basket extends React.Component {
    removePizza(pizzaId) {
        this.props.removePizza(pizzaId);
    }
    incAmount(pizzaId) {
        this.props.incAmount(pizzaId);
    }
    decAmount(pizzaId) {
        this.props.decAmount(pizzaId);
    }
    render() {
        return(
            <div className="container">
                <img className="basketPizzaImg" src={this.props.image} onerror={pepperoni}/>
                 {this.props.name} {this.props.price}тг 
                 <br />
                 <button onClick={(e) => this.decAmount(this.props.id)}>-</button> 
                    count: {this.props.count} 
                 <button onClick={(e) => this.incAmount(this.props.id)}>+</button> <br />

                 <button onClick={(e) => this.removePizza(this.props.id)} >Remove</button>
                <hr />
            </div>
        );
    }
}

export default Basket;