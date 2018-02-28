import React, { Component } from 'react';
import InfoIcon from 'react-icons/lib/fa/info-circle';
import PizzaDetails from './PizzaDetails';

class PizzaItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDetailsClick: false,
			isAddtoBasketClick: false,
		};
	}

	handleDetailsClick = () => {
		if(!this.state.isDetailsClick) {
			this.setState({isDetailsClick: true});
		} else {
			this.setState({isDetailsClick: false});
		}
		// alert("nazhalas' " + curId);
	}

	handleAddToBasketClick = () => {
		// console.log(this.props.pizza.name);
		if(!this.state.isAddtoBasketClick) {
			this.setState({isAddtoBasketClick: true});
			// alert("Clicked");
		} else {
			this.setState({isAddtoBasketClick: false});
			// alert("UNclicked");
		}
	}
	onAddToBasketClicked(pizzaItem) {
		this.props.onAddToBasketClicked(pizzaItem);
	}

	renderAlwaysSection() {
		return(
			<div className="pizzaItems">
					<div className="pizzaItem" >
						<img src={this.props.pizza.image}/>
						<h3>{this.props.pizza.name} 
							<span onClick={this.handleDetailsClick}>
								<InfoIcon />
							</span>
						</h3>
						{this.props.pizza.description}
						<p>	{this.props.pizza.price}тг
							<button onClick={(e) => this.onAddToBasketClicked(this.props.pizza)} >Add to basket</button>
						</p>
					</div>
    			</div>
		);
	}

  	render() {
		if(this.state.isDetailsClick) {
			return(
				<span>
					{this.renderAlwaysSection()}
					<span className="pizzaDetails"><PizzaDetails id={this.props.id}/></span>
				</span>
			);
		} else
			return (
				<span>
					{this.renderAlwaysSection()}
				</span>
			);
  	}
}

export default PizzaItem;