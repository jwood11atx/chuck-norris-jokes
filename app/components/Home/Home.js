import React from "react";
import Controls from "../Controls/Controls";
import Jokes from "../Jokes/Jokes";

const Home = (props) => {
  // console.log(props);
  return(
    <Controls handleChange={props.handleChange}
      handleNumChange={props.handleNumChange}/>
  )
};

export default Home;
