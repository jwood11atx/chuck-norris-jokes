import React from "react";
import Button from '../Button/Button';
import { browserHistory } from "react-router"
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
               onKeyPress={e => {
                 if (e.nativeEvent.key === "Enter") {
                   this.props.handleChange("jokes", this.props.num)
                   browserHistory.push("/jokes")
                 }}}
               onChange={(e) => this.props.handleNumChange(e.target.value)}
               value={this.props.num}/>
        <br/>
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
