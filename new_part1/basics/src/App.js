import React from "react";

const App = () => {
  return(
    <>
    <h1>Greetings</h1>
    <Hello name="George" age={10+26} />
    <Hello name="Daisy" age={12} />
    </>
  )
};

const Hello = (props) => {
  return(
    <div>
      <p>Hello, {props.name}! you are {props.age}.</p>
    </div>
  );
}

export default App;