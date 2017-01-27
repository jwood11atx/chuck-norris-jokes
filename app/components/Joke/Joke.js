import React from "react";
import './joke-style';


const Joke = (props) => {
  return(
    <div className="joke" id={props.id}>
      <article className="joke-text">{props.joke}</article>
      <p className={`star-btn ${props.favoritesCheck(props)}`} id={props.id} onClick={(e) => {e.target.classList.toggle("clicked"); props.updateFavorites(e)}}>star</p>
    </div>)
}

export default Joke;
