import React from "react";
import Joke from "../Joke/Joke";
import './jokes-style';


const Jokes = (props) => {
  return (
    <div className="jokes-container">
      {props.data.slice(1).map((joke, i) =>
        <Joke key={joke.id} i={i} joke={joke.joke}/>)}
    </div>
  )
}

export default Jokes;
