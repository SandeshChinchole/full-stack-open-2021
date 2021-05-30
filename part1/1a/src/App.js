import React from 'react'

const Footer = () =>{
  return(
    <div>
      Greeting app created by <a href="www.github.com">Sandesh</a>
    </div>
  )
}

const Hello = (props) =>{
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () =>{
  const name = "Ron"
  const age = 10
  return(
    <>
      <h1>Greetings</h1>
      <Hello name = 'George' age = {26 + 10}/>
      <Hello name = {name} age = {age}/>
      <Hello name = 'Hermoine'/>
      <Hello name = 'Luna'/>
      <Footer />
    </>
  )
}

export default App