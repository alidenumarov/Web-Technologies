import React from 'react';
import logos from '../img/pizza-logo.png';

class Header extends React.Component {
    render() {
        return(
            <div className="logo">
          <a href="/">
            <img src={logos} />
          </a>
          <div className="address">
            <p>Pizza Delivery in Almaty</p>
            <p>Day&Night</p>
          </div>
          <div className="phone_number">
            <p>Phone: </p>
            <p>+7 771 207 89 95</p>
          </div>
          <button className="basket">Basket</button>
        </div>
        );
    }
}

export default Header;