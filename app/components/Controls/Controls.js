import React from "react";
import Button from '../Button/Button';

class Controls extends React.Component {


  render(){
    return(
      <div className={"controls-field"}>
        <input type="number" ref="numField" placeholder="#" onChange={(e) =>  this.props.handleNumChange(e.target.value)} value={this.props.num}/>

        <Button link="jokes"
                handleChange={this.props.handleChange}
                jokecount={this}
                label="Get Jokes!"
                disabled="true"/>

        <Button link="favorites"
                label="Favorites"
                favIDs={this.props.favIDs}
                handleChange={this.props.loadFavorites}
              />

      </div>
    )
  }
};

export default Controls;
