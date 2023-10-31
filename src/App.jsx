/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-direct-mutation-state */
import { Component } from "react";

class App extends Component{

  constructor(props){
    super(props);
    
    this.state = {
      goodCount : 0,
      neutralCount : 0,
      badCount : 0
    }
  }

   handleGood = () =>{
    this.setState({
      count: this.state.goodCount
      ,
    }) 
  }

   handleNeutral = () =>{

  }

   handleBad = () =>{

  }

  render() {
    return(
      
      <><div>
        <h1>Give Feedback</h1>
        <button onClick={this.handleGood}>Good</button>
        <button onClick={this.handleNeutral}>Neutral</button>
        <button onClick={this.handleBad}>Bad</button>
      </div>
      <div>
        <p>Statistics:</p> 
        <p>Good: {this.state.goodCount} </p>
        <p>Neutral: </p>
        <p>Bad: </p>
      </div>
      </>
        

      
    )
  }
}

export default App;