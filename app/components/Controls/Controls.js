import React from "react";
import Button from '../Button/Button';

class Controls extends React.Component {


  render(){
    console.log(this);

    return(
      <div>
        <input type="number" ref="numField" placeholder="#" onChange={(e) =>  this.props.handleNumChange(e.target.value)}/>
        <Button link="jokes" handleChange={this.props.handleChange} jokecount={this} label="Get Jokes!" disabled="true"/>
        <Button link="favorites" label="Favorites" />
      </div>
    )
  }
};

export default Controls;
