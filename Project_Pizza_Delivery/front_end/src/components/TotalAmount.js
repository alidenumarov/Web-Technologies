import React from 'react';
import '../App.css';
class TotalAmount extends React.Component {
    totalAmount(pizzaInBasket) {
        var sum = 0;
        for(var curP = 0; curP < pizzaInBasket.length; curP++) {
            sum += pizzaInBasket[curP].price * pizzaInBasket[curP].count;
        }
        return sum;
    }
    render() {
        return(
            <div className="container">
                <p>Total Amount={this.totalAmount(this.props.pizzas)}</p>
            </div>
        );
    }
}

export default TotalAmount;