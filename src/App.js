import React, { Component } from 'react'
import './App.css';
import Content from './components/Content';
import Home from './components/Home';
import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';
import Todos from './hooks/UseReducer/UseReducer';
import UseMemo from './hooks/UseMemo/UseMemo';
import UseCallback from './hooks/UseCallback/UseCallback.jsx';
import Counter from './components/LifeCycle/Counter';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showCounter: true,
    }
  }


  removeCounter() {
    this.setState({showCounter: false})
  }

  render() {
    return (
      <div className="App">
        {/* <Home/>
        <Content/> */}
        {/* <UseState/> */}
        {/* <UseEffect/> */}
        {/* <Todos/> */}
        {/* <UseMemo/> */}
        {/* <UseCallback/> */}
  
        {/* life cycle */}
        <button onClick={() => this.removeCounter()}>Remove counter</button>
        
        {
          this.state.showCounter && <Counter/>
        }
        
      </div>
    );
  }
}

