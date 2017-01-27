import React from "react";
import Controls from "../Controls/Controls";
import Jokes from "../Jokes/Jokes";

const Home = (props) => {
  return(
    <div>
      <Controls
        handleChange={props.handleChange}
        handleNumChange={props.handleNumChange}
        num={props.state.num}/>
      <h2>Click Get Jokes!</h2>
    </div>
  )
};

export default Home;
