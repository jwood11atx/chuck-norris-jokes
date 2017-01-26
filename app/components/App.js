import React from 'react'

import Header from "./Header/Header";
import Controls from "./Controls/Controls";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  loadSettings(){
    console.log("loading settings!");
  };

  loadFavorites(){
    console.log("loading favorites!");
  };

  loadNewJokes(num){
    console.log("loading new jokes!");
    let data;
    if(num)
    fetch(`https://api.icndb.com/jokes/random/${num}/?escape=javascript`)
          .then(response => response.json())
          .then(json => {
            this.setState({data: json.value});
        });
  };

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
    if(this.props.children)
      return React.cloneElement(this.props.children, this.state)
  }


  render(){
    return (
      <div>
        <Header/>
        <p>new world</p>
        <Controls handleChange={this.handleChange.bind(this)}/>
        <div className="jokes-container">
          {this.childCheck()}
        </div>
      </div>
    );
  }
}

export default App;
