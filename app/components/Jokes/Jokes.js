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
            <div className="jokes-container">
              {props.state.data.length > 1 ?
                 props.state.data.slice(1).map((joke) =>
                  <Joke key={joke.id} id={joke.id}
                    joke={joke.joke}
                    updateFavorites={props.updateFavorites}
                    favoritesIDsCheck={props.favoritesIDsCheck}/>)
                :
                  <h2>Click Get Jokes!</h2>
                  }
                </div>
            </div>
    )
  } else {
    return(
      <div className="jokes-container">
        {props.state.favorites.length > 0 ?
          props.state.favorites.map((joke) =>
          <Joke key={joke.id} id={joke.id}
                joke={joke.joke}
                updateFavorites={props.updateFavorites}
                favoritesIDsCheck={props.favoritesIDsCheck}/>)
        :
      <div>
        <img src="http://i.imgur.com/R3QZBQE.gif"/>
        <h2>No favorites???</h2>
      </div>
        }
      </div>
    )
  }
}

export default Jokes;
