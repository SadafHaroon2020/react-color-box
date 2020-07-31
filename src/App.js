import React from 'react';
import './App.css';

class App extends React.Component{
  /*creating state for color and counter*/
  constructor() {
    super()
    this.state = {
      counter: 0,
      color: "white",
    }
  }
  /**
   * using component lifecycle method to set state.
   */
  render() {
    return (
      <div className="App">
        <div className="box" onClick = "">
                
        </div>
      </div>
    );
  }
}
export default App;
