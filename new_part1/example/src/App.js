import React from "react";

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age;

  return(
    <div>
      <p>hello {name}, you are {age} years old.</p>
      <p>you were probably born in {bornYear()}.</p>
    </div>
  );
};

const App = () => {
  const name = "adam";
  const age = 10;

  return(
    <div>
      <Hello name={name} age={age} />
      <Hello name="dolores" age={10+11} />
    </div>
  );
};

export default App;