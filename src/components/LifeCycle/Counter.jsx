import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        console.log("counter constructor");
        super(props);
        this.state = {
            count: 0
        }
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrease() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        console.log("couter render");
        return (
            <div className="counter">
                <button onClick={() => this.decrease()}>-</button>
                <span> {this.state.count} </span>
                <button onClick={() => this.increase()}>+</button>
            </div>
        )
    }

    componentDidMount() { //called for the first time
        console.log('Counter did mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.count === nextState.count) {
            return false;
        }
        return true;
    }

      componentDidUpdate() { //goi khi state or props changed
        console.log('Counter did update');
      }
      componentWillUnmount  () {
        console. log('Counter will unmount');
      }

}

export default Counter;