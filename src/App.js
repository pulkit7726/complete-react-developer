import React,{Component} from 'react';
import './App.css';
import ReactSetState from './component/ClassComponent/ReactSetState';
import MapArray from './component/ClassComponent/MappedArray';
import LifeCycleMethod from './component/ClassComponent/LifeCycleMethod';
class App extends Component{

  render(){
    return (
      <div className="App">
          <ReactSetState />
          <MapArray />
          <LifeCycleMethod />
      </div>
    );
  }
  
}

export default App;
