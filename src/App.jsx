import { Component } from 'react'

class App extends Component{

  //called after the component has to be rendered to the DOM
  componentDidMount(){
    console.log('Component Mounted')
  }

  //called immediately after the component updated in the DOM
  componentDidUpdate(){
    console.log('Component state updated')
  }

  componentWillUnmount(){
    //invoked just before the component is removed from DOM
    //releasing memory or resource    
    //detaching the events
    //canceling the timer
  }


  render(){
    return(
      <div>Hello World!</div>
    )
  }
}

export default App