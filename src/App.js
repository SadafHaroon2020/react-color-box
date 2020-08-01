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
 /**generating random number between the range */
  getRandom(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max-min));
}
 /**
   * counter increment function with color changing
   */
  incrementCounter=()=>{
   /**picking lower value to have dark background and max as 150 to get some brigher colors. */
    let minColor = 0;
    let maxColor = 150;
    let colorCode = `rgb(${this.getRandom(minColor,maxColor)},${this.getRandom(minColor,maxColor)},${this.getRandom(minColor,maxColor)})`;
    
    // const newColor = this.state.color == "blue" ? "orange" : "blue";
    
    this.setState(
     {counter : this.state.counter + 1,
      color : colorCode,
    }); 
  }

  render() {
    return (
      <div className="App">
        <div className="box" onClick = {this.incrementCounter} style = {{background: this.state.color}}>
             Click Here {this.state.counter}   
        </div>
      </div>
    );
  }
}
export default App;
