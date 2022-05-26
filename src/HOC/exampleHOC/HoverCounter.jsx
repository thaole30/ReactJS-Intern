import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {

    
    
    render() {
        
        const {count, incrementCount} = this.props;

        return (
            <div>
                
                <h2 onMouseOver={incrementCount}>Hover this line</h2>
                <h4>Hover count : {count}</h4>
                <h4>Component name props: {this.props.name}</h4>

                <h2>My Uni: {this.props.university}</h2>
            </div>
        );
    }
}

export default withCounter(HoverCounter, 2);