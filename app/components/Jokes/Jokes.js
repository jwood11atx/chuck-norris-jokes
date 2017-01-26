import React from "react";
import Joke from "../Joke/Joke"

const Jokes = (props) => {
  return (
    <div>
      {props.data.map((joke, i) =>
        <Joke key={joke.id} i={i} joke={joke.joke}/>)}
    </div>
  )
}

export default Jokes;
