import React,{Component} from 'react';
class MapArray extends Component{

  constructor(){
    super();
    this.state = {
      mapArray: [
        { id: 1, name: 'jhon' },
        { id: 2, name: 'sam' },
        { id: 3, name: 'jim' },
      ]
    }
  }
 
  render(){
    return (
      <div>
        <h1>Mapping Arrays to Elements</h1>
          {
            this.state.mapArray.map((value) => {
                return <p key={value.id}>{value.name}</p>
            })
          }
      </div>
    );
  }
  
}

export default MapArray;
