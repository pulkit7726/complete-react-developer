import React,{Component} from 'react';
class ReactSetState extends Component{

  constructor(){
    super();
    this.state = {
      name: "Jhon",
      company: "Wavelabs"
    }
  }
 // Using setState and Secondary Callback
  render(){
    return (
      <div>
        <h1>Using setState and Secondary Callback</h1>
          <p>Hi {this.state.name}, I work at {this.state.company}</p>           
          <button onClick={() => {this.setState(
            () => {
              return {
                name: "Sam"
              }
            },
            () => {     // this callback is optional in setState
              console.log(this.state) 
            }
          )}}>Change Name</button>
      </div>
    );
  }
  
}

export default ReactSetState;
