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
      lastName: "Norris",
      favorites: []
    }
  };

  componentDidMount(){
    this.loadNewJokes(0);
    if (localStorage.length !== 0) {
      this.setState({favorites: JSON.parse(localStorage.getItem("favorites"))})
    }
  };

  loadSettings(){
    console.log("loading settings!");
  };

  loadFavorites(){
    console.log("loading favorites!");
  };

  loadNewJokes(num){
    let { selected, firstName, lastName } = this.state
    num++;
    const parentalConrol = selected === "on" ?
    "&limitTo=[explicit]" : "";
    fetch(`https://api.icndb.com/jokes/random/${num}?escape=javascript&firstName=${firstName}&lastName=${lastName}&${parentalConrol}`)
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
      return React.cloneElement(this.props.children, {
        handleChange: this.handleChange.bind(this),
        handleNumChange: this.handleNumChange.bind(this),
        radioToggle: this.radioToggle.bind(this),
        changeName: this.changeName.bind(this),
        updateFavorites: this.updateFavorites.bind(this),
        favoritesCheck: this.favoritesCheck.bind(this),
        state: this.state})
    }
  }

  radioToggle(e){
    e.target.value === "On" ?
    this.setState({selected: "on"})
    :
    this.setState({selected: "off"})
  };

  changeName(name){
    name = name.split(" ");
    this.setState({
      firstName: name[0] || "Chuck",
      lastName: name[1] || "Norris"
    })
  }

  updateFavorites(e) {
    let favs = this.state.favorites;
    if (e.target.classList.contains("clicked")) {
      favs.push(e.target.id)
      this.setState({favorites: favs})
    } else {
      favs = favs.filter(fav => fav !== e.target.id);
      this.setState({favorites: favs})
    }
    localStorage.setItem("favorites", JSON.stringify(favs))
  }

  favoritesCheck(e) {
    if (this.state.favorites.indexOf(e.id) !== -1) {
      return "clicked"
    }
  }

  loadFavorites() {
    fetch(`https://api.icndb.com/jokes/random/${num}?escape=javascript&firstName=${firstName}&lastName=${lastName}&${parentalConrol}`)
        .then(response => response.json())
        .then(json => {
          this.setState({data: json.value});
      });
  }

  render(){
    return (
      <div className="app">
        <Header {...this.props}/>
        <p>{this.state.data[0] ? this.state.data[0].joke : "welcome!" }</p>
        {this.childCheck()}
      </div>
    );
  }
}

export default App;
