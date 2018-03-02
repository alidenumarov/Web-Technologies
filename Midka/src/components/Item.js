import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isClickedItem: false,
            currentText: this.props.text
        }
    }
    handleClick = (curId) => {
        this.props.onClick(curId);
        this.setState({isClickedItem: this.props.isClicked});
        this.renderItemCheck();
    }
    renderItem = () => {
        for(var i = 0; i < this.props.items.length; i++) {
            let curText = this.props.text;
            if(this.props.items[i].isClicked) {
                // this.setState({isClickedItem: true})
                this.state.isClickedItem = true;
                // this.setState({currentText: "CLICKED"})
            } else {
                // this.setState({isClickedItem: false})
                this.state.isClickedItem = false;                
                // this.setState({isClickedItem: false});
            }
        }
    }
    renderItemCheck = () => {
        if(this.state.isClickedItem) {
            this.state.currentText = "CLICKED";            
            return(
                <p>{this.state.currentText}</p>
            )
        } else {
            this.state.currentText = "UNCLICKED";                                
                return(
                    <p>{this.state.currentText}</p>
                )
        }
    }
    render() {
        return(
            <tr>
                <div className="navigationItem" onClick={(e) => this.handleClick(this.props.id)} >
                    {this.props.text}
                    {this.renderItemCheck()}
                </div>
            </tr>
        );
    }
}