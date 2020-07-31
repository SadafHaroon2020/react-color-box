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
   * counter increment function with color changing
   */
  incrementCounter=()=>{
    const newColor = this.state.color == "blue" ? "orange" : "blue";
    this.setState(
     {counter : this.state.counter + 1,
      color : newColor,
    }); 
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
