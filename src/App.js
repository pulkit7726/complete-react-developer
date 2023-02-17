import React,{Component} from 'react';
import './App.css';
import ReactSetState from './component/ClassComponent/ReactSetState';
import MapArray from './component/ClassComponent/MappedArray';
import LifeCycleMethod from './component/ClassComponent/LifeCycleMethod';

import InputSearch from './component/17-Feb/InputSearch';


const App = () => {
  return (
    <div className="App">
        {/*<ReactSetState />
        <MapArray />
        <LifeCycleMethod />*/}
        <InputSearch />
    </div>
  );
}
// class App extends Component{

//   render(){
//     return (
//       <div className="App">
//           {/*<ReactSetState />
//           <MapArray />
//           <LifeCycleMethod />*/}
//           <InputSearch />
//       </div>
//     );
//   }
  
// }

export default App;
