import React, { Component } from 'react';
import InfoIcon from 'react-icons/lib/fa/info-circle';
class PizzaItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDetailsClick: false
		};
	}

	handleDetailsClick = () => {
		const curId = this.props.id;
		this.setState({
			isDetailsClick: true
		});
		// alert("basildi " + curId);
	}
  	render() {
		if(this.state.isDetailsClick) {
			return(
				<div className="pizzaItems">
    			<div className="pizzaItem" >
		    		<img src={this.props.pizza.image}/>
		      		<h3>{this.props.pizza.name} 
					  <span onClick={this.handleDetailsClick}>
					  	<InfoIcon />
					  </span>
					</h3>
					<div>
						ok
					</div>
		      		<br />
		      		{this.props.pizza.description}
	      		</div>

    		</div>
			);
		} else
    	return (
    		<div className="pizzaItems">
    			<div className="pizzaItem" >
		    		<img src={this.props.pizza.image}/>
		      		<h3>{this.props.pizza.name} 
					  <span onClick={this.handleDetailsClick}>
					  	<InfoIcon />
					  </span>
					</h3>
		      		<br />
		      		{this.props.pizza.description}
	      		</div>

    		</div>	
      );		
  	}
}

export default PizzaItem;