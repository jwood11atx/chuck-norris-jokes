import React from "react";
import Controls from "../Controls/Controls";
import Joke from "../Joke/Joke";
import './jokes-style';


const Jokes = (props) => {
  let { pathname } = props.location;
  let link = pathname[0] === "/" ? pathname.slice(1) : pathname;


  if (link === "jokes") {
    return(
          <div className="jokes-field">
            <Controls handleChange={props.handleChange}
                      handleNumChange={props.handleNumChange}
                      loadFavorites={props.loadFavorites}
                      num={props.state.num}
                      favIDs={props.state.favoritesIDs}/>
            {props.state.data.slice(1).map((joke) =>
              <Joke key={joke.id} id={joke.id}
                    joke={joke.joke}
                    updateFavorites={props.updateFavorites}
                    favoritesIDsCheck={props.favoritesIDsCheck}/>)}
           </div>
    )
  } else {
    return(
      <div className="jokes-field">
        {props.state.favorites.map((joke) =>
          <Joke key={joke.id} id={joke.id}
                joke={joke.joke}
                updateFavorites={props.updateFavorites}
                favoritesIDsCheck={props.favoritesIDsCheck}/>)}
      </div>
    )
  }
}

export default Jokes;
