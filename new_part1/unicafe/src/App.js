import React, {useState} from "react";

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>;

const Statistics = (props) => {
  if(props.all === 0){
    return <p>No Feedback Received</p>
  };

  return(
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="All" value={props.all} />
          <StatisticLine text="Average" value={props.average} />
          <StatisticLine text="Positive" value={props.positive + " %"} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const all = good + bad + neutral;
  const average = (good - bad)/all;
  const positive = (good/all) * 100;

  return(
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleClickGood} text="Good" />
      <Button onClick={handleClickNeutral} text="Neutral" />
      <Button onClick={handleClickBad} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
    </div>
  );
};

export default App;