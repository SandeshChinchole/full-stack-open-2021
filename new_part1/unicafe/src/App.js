import React, {useState} from "react";

const Statistics = (props) => {
  if(props.all === 0){
    return <p>No Feedback Received</p>
  };

  return(
    <div>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>All {props.all}</p>
      <p>Average {props.average}</p>
      <p>Positive {props.positive} %</p>
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
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
    </div>
  );
};

export default App;