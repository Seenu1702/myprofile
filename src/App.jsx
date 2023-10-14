const Hello = (props) => {
  return(
    <div>
      <p>Hello { props.name }. Your age is { props.age }</p>
    </div>
  )
}


const App = () =>{
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name='Seenu' age='24'/>
      <Hello name='Vishwa' age='25'/>
    </div>
  )

}


export default App;