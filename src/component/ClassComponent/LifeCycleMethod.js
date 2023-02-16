import React,{Component} from 'react';
class LifeCycleMethod extends Component{

  constructor(){
    super();
    this.state = {
      mapArray: [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => 
      this.setState(
        () => {
            return {mapArray: user}
        }
      )
      )
      .catch((error) => console.log(error))
  }
 
  render(){
    return (
      <div>
        <h1>Life Cycle Method: componentDidMount()</h1>
          {
            this.state.mapArray.map((value) => {
                return <p key={value.id}>{value.name}</p>
            })
          }
      </div>
    );
  }
  
}

export default LifeCycleMethod;
