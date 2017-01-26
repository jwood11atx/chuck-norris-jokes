import React from 'react'

import Header from "./Header/Header";
import Controls from "./Controls/Controls";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      num: null
    }
  };

  componentDidMount(){
    this.loadNewJokes(0);
  };

  loadSettings(){
    console.log("loading settings!");
  };

  loadFavorites(){
    console.log("loading favorites!");
  };

  loadNewJokes(num){
    num++;
    fetch(`https://api.icndb.com/jokes/random/${num}?escape=javascript`)
          .then(response => response.json())
          .then(json => {
            this.setState({data: json.value});
        });
  };

  handleNumChange(userInput){
    this.setState({num: userInput})
  }

  handleChange(link, num){
    switch (link) {
      case "settings":
        return this.loadSettings();
      case "favorites":
        return this.loadFavorites();
      case "jokes":
        return this.loadNewJokes(num);
      default:
        return;
    }
  };

  childCheck(){
    if(this.props.children){
      return React.cloneElement(this.props.children, this.state)
    } else {
      return "Click Get Jokes!"
    }
  }

  render(){
    return (
      <div>
        <Header/>
        <p>{this.state.data[0] ? this.state.data[0].joke : "welcome!" }</p>
        <Controls handleChange={this.handleChange.bind(this)}
                  handleNumChange={this.handleNumChange.bind(this)}/>
        {this.childCheck()}
      </div>
    );
  }
}

export default App;
