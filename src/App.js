import React from 'react';
import './App.css';

class App extends React.Component{
  /*creating state for color and counter*/
  constructor() {
    super()
    this.state = {
      counter: 0,
      color: " ",
    }
  }
  /**
   * using component lifecycle method to set state.
   */
   
  componentDidMount =()=>{
  
    this.setState({
      // counter : this.state.counter + 1,
      color : "blue"
      
    });
  }
  /**
   * counter increment function
   */
  incrementCounter=()=>{
    this.setState(
     {counter : this.state.counter + 1,
      color : "orange"
    }
    )
    
  }
  render() {
    return (
      <div className="App">
        <div className="box" onClick = {this.incrementCounter} style = {{background: this.state.color}}>
             {this.state.counter}   
        </div>
      </div>
    );
  }
}
export default App;
