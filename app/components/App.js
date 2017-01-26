import React from 'react'

import Header from "./Header/Header";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      num: ""
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
    num = num || 0;
    switch (link) {
      case "jokes":
        return this.loadNewJokes(num);
      default:
        return;
    }
  };

  childCheck(){
    if(this.props.children){
      return React.cloneElement(this.props.children, {handleChange: this.handleChange.bind(this), handleNumChange: this.handleNumChange.bind(this), data: this.state.data, num: this.state.num})
    }
  }

  render(){
    return (
      <div>
        <Header/>
        <p>{this.state.data[0] ? this.state.data[0].joke : "welcome!" }</p>
        {this.childCheck()}
      </div>
    );
  }
}

export default App;
