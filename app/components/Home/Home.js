import React from "react";
import Controls from "../Controls/Controls";

const Home = (props) => {
  return(
    <div>
      <Controls
        handleChange={props.handleChange}
        handleNumChange={props.handleNumChange}
        loadFavorites={props.loadFavorites}
        num={props.state.num}
        favIDs={props.state.favoritesIDs}/>
      <h2>Click Get Jokes!</h2>
    </div>
  )
};

export default Home;
