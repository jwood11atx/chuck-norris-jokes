import React from "react";
import Button from '../Button/Button';

class Controls extends React.Component {

  render(){
    return(
      <div>
        <input type="number" ref="numField" placeholder="#" />
        <Button link="jokes" handleChange={this.props.handleChange} jokecount={this} label="New Jokes" />
        <Button link="favorites" label="Favorites" />
      </div>
    )
  }
};

export default Controls;
