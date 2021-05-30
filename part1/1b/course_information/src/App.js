import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Total exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  //const course = "Half Stack application development";

  // defining variables using objects
  /*
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "State of a component",
    exercises: 14
  }
  */

  // defining variables using arrays
  /*
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ]
  */

  // defining variables using single object

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ] 
  }

  return(
    <div>
      <Header course = {course}/>
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App