/* eslint-disable react/prop-types */
import { Component } from "react";

class Hello extends Component{
  render() {

    // console.log(this.props);
    const {name} = this.props;

    return(
      // <div>Hello {this.props.name}!</div>
      <div>Hello {name}!</div>

    )
  }
}

class App extends Component{
  render() {
    return(
      <div>
        <Hello name='Seenu' />
      </div>
    )
  }
}

export default App