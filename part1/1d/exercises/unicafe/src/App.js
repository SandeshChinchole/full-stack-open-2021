import React, {useState} from 'react'

const Title = (props) => {
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistic = ({value, text}) => {
  return(
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Statistics = (props) => {

  if (props.all === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return(
    <table>
      <tbody>
        <tr><Statistic value = {props.good} text = {"Good"} /></tr>
        <tr><Statistic value = {props.neutral} text = {"Neutral"} /></tr>
        <tr><Statistic value = {props.bad} text = {"Bad"} /></tr>
        <tr><Statistic value = {props.all} text = {"All"} /></tr>
        <tr><Statistic value = {props.average} text = {"Average"} /></tr>
        <tr><Statistic value = {props.positive + " %"} text = {"Positive"} /></tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const title = "Give Feedback";
  const subtitle = "Statistics"
  const [good, setGood] = useState(0);
  const [bad, setbad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  }

  const handleClickBad = () => {
    setbad(bad + 1);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  }

  const all = good + bad + neutral;

  const average = (good - bad)/all;

  const positive = (good/all) * 100;

  return(
    <div>
      <Title text = {title} />
      <Button handleClick = {handleClickGood} text = {"Good"}/>
      <Button handleClick = {handleClickBad} text = {"Bad"} />
      <Button handleClick = {handleClickNeutral} text = {"Neutral"} />
      <Title text = {subtitle} />
      <Statistics good = {good} bad = {bad} neutral = {neutral} all = {all} average = {average} positive = {positive} />
    </div>
  )
}

export default App;