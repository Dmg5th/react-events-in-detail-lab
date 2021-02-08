// Code CoordinatesButton Component Here
import React from 'react'; 

class CoordinatesButton extends React.Component {

    handleclick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    
    render(){
        return <button onClick={this.handleclick}> </button>
    }
}

export default CoordinatesButton; 