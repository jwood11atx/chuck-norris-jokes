import React from "react";
import './joke-style';


const Joke = (props) => {
  return(
    <div className="joke" id={props.id}>
      <article className="joke-text">{props.joke}</article>
      <p className={`star-btn ${props.favoritesIDsCheck(props.id)}`}
         id={props.id}
         onClick={(e) => {
           e.target.classList.toggle("clicked"); props.updateFavorites(e)}}>★</p>
    </div>)
}

export default Joke;
