// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

    handleClick = (event) => {
        window.setTimeout(() => {
           this.props.onDelayedClick() 
        }, this.props.delay);
    
    render(){
        return (
            <button onClick={this.handleClick}
            ></button>
        )
    }
}

export default DelayedButton;