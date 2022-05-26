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
import UseRef from './hooks/UseRef/UseRef';
import UseRef2 from './hooks/UseRef/UseRef2';
import ExampleTheme from './hooks/useContext/ExampleTheme';
import ExampleMemo from './HOC/memo/ExampleMemo';
import ParentLogin from './hooks/ContextApi/ParentLogin';
import Parent from './HOC/exampleHOC/Parent';
import UsersList from './HOC/example2/UsersList';
import LazyLoading from './components/LazyLoading/LazyLoading';
import UseRef3 from './hooks/UseRef/UseRef3';
import { UseRef4 } from './hooks/UseRef/useRef4';
import { UseRef5 } from './hooks/UseRef/UseRef5';



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

    // const [theme, setThem]

    return (
      <div className="App">
        {/* <Home/>
        <Content/> */}
        {/* <UseState/> */}
        {/* <UseEffect/> */}
        {/* <Todos/> */}
        {/* <UseMemo/> */}
        {/* <UseCallback/> */}
        {/* <UseRef/> */}
        {/* <UseRef2/> */}
        {/* <UseRef3/> */}
        {/* <UseRef4/> */}
        {/* <UseRef5/> */}

        {/* <ExampleMemo/> */}
        {/* <ExampleTheme/> */}

        {/* Context api */}
        {/* <ParentLogin/> */}

        {/* ------HOC----- */}
        <Parent/>
        {/* <UsersList/> */}


  
        {/* life cycle */}
        {/* <button onClick={() => this.removeCounter()}>Remove counter</button>
        
        {
          this.state.showCounter && <Counter/>
        } */}
        
        {/* React lazy */}
        {/* <LazyLoading/> */}

      </div>
    );
  }
}

