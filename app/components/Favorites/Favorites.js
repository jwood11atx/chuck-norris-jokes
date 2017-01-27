import React from "react";
import Controls from "../Controls/Controls";
import Joke from "../Joke/Joke";
import './favorites-style';


const Favorites = (props) => {
  return (
    <div className="favorites-field">
      <Controls handleChange={props.handleChange}
        handleNumChange={props.handleNumChange} num={props.num}/>
      {props.state.data.slice(1).map((joke, i) =>
        <Joke key={joke.id} id={joke.id}
              joke={joke.joke}
              updateFavorites={props.updateFavorites}
              favoritesCheck={props.favoritesCheck}/>)}
    </div>
  )
}

export default Favorites;
