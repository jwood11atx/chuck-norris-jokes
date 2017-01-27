import React from "react";
import Button from '../Button/Button';
import './controls-style';


class Controls extends React.Component {


  render(){
    return(
      <div className="controls-field">
        <Button link="jokes"
                handleChange={this.props.handleChange}
                jokecount={this}
                label="Get Jokes!"
                disabled="true"/>

        <input type="number"
               ref="numField"
               className="num-field"
               placeholder="#"
               onChange={(e) => this.props.handleNumChange(e.target.value)}
               value={this.props.num}/>

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
