import React from "react";
import Controls from "../Controls/Controls";
import Joke from "../Joke/Joke";
import './jokes-style';


const Jokes = (props) => {
  return (
    <div className="jokes-field">
      <Controls handleChange={props.handleChange}
        handleNumChange={props.handleNumChange} num={props.num}/>
      {props.state.data.slice(1).map((joke, i) =>
        <Joke key={joke.id} i={i} joke={joke.joke}/>)}
    </div>
  )
}

export default Jokes;
