import React from 'react'

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age;
  
  return(
    <div>
      <p>My name is {name}. I am {age} years old.</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = "Peter";
  const age = 10;

  return(
    <div>
      <h1>Greetings</h1>
      <Hello name = "Dan" age = {10 + 35}/>
      <Hello name = {name} age = {age} />
    </div>
  )
}

export default App