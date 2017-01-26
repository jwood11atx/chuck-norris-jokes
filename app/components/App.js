import React from 'react'

import Header from "./Header/Header";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      num: "",
      selected: "off",
      firstName: "Chuck",
      lastName: "Norris"
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
    const parentalConrol = this.state.selected === "on" ? "&limitTo=[explicit]" : "";
    fetch(`https://api.icndb.com/jokes/random/${num}?escape=javascript${parentalConrol}`)
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
      return React.cloneElement(this.props.children, {handleChange: this.handleChange.bind(this), handleNumChange: this.handleNumChange.bind(this), radioToggle: this.radioToggle.bind(this), changeName: this.changeName.bind(this), state: this.state})
    }
  }

  radioToggle(e){
    e.target.value === "On" ?
    this.setState({selected: "on"})
    :
    this.setState({selected: "off"})
  };

  changeName(name){
    name.split(" ");
    this.setState({
      firstName: name[0],
      lastName: name[1]
    })
  }

  render(){
    return (
      <div>
        <Header {...this.props}/>
        <p>{this.state.data[0] ? this.state.data[0].joke : "welcome!" }</p>
        {this.childCheck()}
      </div>
    );
  }
}

export default App;
