import './App.css';
import Content from './components/Content';
import Home from './components/Home';
import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';
import Todos from './hooks/UseReducer/UseReducer';
import UseMemo from './hooks/UseMemo/UseMemo';
import UseCallback from './hooks/UseCallback/UseCallback.jsx';

function App() {
  return (
    <div className="App">
      {/* <Home/>
      <Content/> */}
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <Todos/> */}
      {/* <UseMemo/> */}
      <UseCallback/>
    </div>
  );
}

export default App;
