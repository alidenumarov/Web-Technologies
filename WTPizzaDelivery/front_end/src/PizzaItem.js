import React, { Component } from 'react';

class PizzaItem extends Component {
  	render() {
    	return (
    		<div className="pizzaItems">

    			<div className="pizzaItem" >

		    		<img src={this.props.pizza.image}/>
		      		
		      		<h3>{this.props.pizza.name}</h3>

		      		<br />

		      		{this.props.pizza.description}
	        	
	      		</div>

    		</div>	
      );		
  	}
}

export default PizzaItem;