import { Component } from "react";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      good : 0,
      bad : 0,
      neutral : 0
    }
  }

  handleGood = () => {
    this.setState({
      ...this.state,
      good: this.state.good +1
    })
  }

  handleBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }))
  }

  handleNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }))
  }

  render(){
    return(
      <>
      <div>
        <h1>Give Feedback</h1>
        <button onClick={this.handleGood} type="button">Good</button>
        <button onClick={this.handleBad} type="button">Bad</button>
        <button onClick={this.handleNeutral} type="button">Neutral</button>
      </div>
      <div>
          <h1>Statistics</h1>
          <p>Good: {this.state.good}</p>
          <p>Bad: {this.state.bad }</p>
          <p>Neutral: {this.state.neutral }</p>
      </div>
        
      </>
    )
  }
}

export default App;