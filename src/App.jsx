/* eslint-disable react/prop-types */
/*
Hooks: 
    - any function that starts with "use" is called as hook.
    - they are special functions that are only available while React is rendering
  

    to create a counter, where the value is increased as function of time or at a click of button.
*/



function App(props) {

  // console.log(props);
  let {counter} = props;
  console.log(counter);
  return (
    <div>{counter}</div>
  )
}

export default App