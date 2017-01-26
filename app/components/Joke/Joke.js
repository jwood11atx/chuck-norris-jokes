import React from "react";
import './joke-style';


const Joke = (props) => {
  return(
    <div className="joke">
      <article className="joke-text">{props.joke}</article>
    </div>)
}

export default Joke;
