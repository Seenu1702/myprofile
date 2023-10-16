import { Component } from "react";

// stateful Component
class App extends Component {
  constructor(props){
    super(props); //to call the parent class constructor  

    // defining the state
    this.state = {
      count: 0
    }
  }

  handleIncrementClick = () => {
    // update the state(data) of the count
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  handleDecrementClick = () => {
    if(this.state.count > 0)
    {
      this.setState((prevState) => ({
        count: prevState.count - 1
      }))
    }
  }

  handleResetClick = () => {
    this.setState((prevState) => ({
      count: 0
    }))
  }

  render(){
    return(
      <div>
        <p>Count: { this.state.count }</p> 
        <button onClick={ this.handleIncrementClick }>Increment</button>
        <button onClick={ this.handleDecrementClick }>Decrement</button>
        <button onClick={ this.handleResetClick }>Reset</button>
        
      </div>
    )
  }
}

export default App