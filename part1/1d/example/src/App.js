import React, {useState} from 'react'

const Button = (props) => {
  console.log("props value is ", props);
  return(
    <button onClick = {props.handleClick}>{props.text}</button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0){
    return(
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      The history: {props.allClicks.join(" ")}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([])

  const handleLeftClicks = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }

  const handleRightClicks = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }
  
  return(
    <div>
      {left}
      <Button handleClick = {handleLeftClicks} text = "Left" />
      <Button handleClick = {handleRightClicks} text = "Right" />
      {right}
      <History allClicks = {allClicks} />
    </div>
  )
}

export default App;