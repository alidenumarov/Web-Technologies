import React from "react";
import star2 from './images/star2.jpg';
import star1 from './images/star1.jpg';

export default class Star extends React.Component {
	onClickHandle() {
		const star = star2;
		// this.props.changeImg(star2);
	}
	render() {
		return(
			<div>
				<button className="imgStar" src={star1} onClick={this.onClickHandle.bind(this)} />
			</div>
		);
	}
}