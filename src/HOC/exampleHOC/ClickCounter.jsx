import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {



    render() {

        const {count, incrementCount} = this.props;
        console.log("count", count)

        return (
            <div>
                <h3>Count: {count}</h3>
                <button onClick={incrementCount}>Click</button>
                <h4>Component name props: {this.props.name}</h4>
                <h3>Product: {this.props.product}</h3>
                <hr />
            </div>
        );
    }
}

export default withCounter(ClickCounter, 5);