import React,{Component} from 'react';
import './App.css';
import ReactSetState from './component/ClassComponent/ReactSetState';
class App extends Component{

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <ReactSetState />
        </header>
      </div>
    );
  }
  
}

export default App;
