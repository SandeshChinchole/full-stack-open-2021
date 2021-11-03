import React, {useState} from "react";

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
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {positive} %</p>
    </div>
  );
};

export default App;