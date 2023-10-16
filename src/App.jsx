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

  increment = () => {
    // update the state(data) of the count
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render(){
    return(
      <div>
        <p>Count: { this.state.count }</p> 
        <p><button onClick={ this.increment }>Increment</button></p>
        <p><button onClick={ this.decrement }>Decrement</button></p>
        
      </div>
    )
  }
}

export default App