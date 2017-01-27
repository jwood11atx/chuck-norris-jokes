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
      favoritesIDs: [],
      favorites: []
    }
  };

  componentWillMount(){
    if (localStorage.length !== 0) {
      this.setState({favoritesIDs: JSON.parse(localStorage.getItem("favorites"))})
    }
  }

  componentDidMount(){
    this.loadNewJokes(0);
    this.state.favoritesIDs.forEach(id => {
      this.loadFavorites(id);
    })
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
        favoritesIDsCheck: this.favoritesIDsCheck.bind(this),
        loadFavorites: this.loadFavorites.bind(this),
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

  loadFavorites(num) {
    let favs = this.state.favorites;
    if (favs.length < this.state.favoritesIDs.length) {
      fetch(`http://api.icndb.com/jokes/${num}`)
        .then(response => response.json())
        .then(json => {
          favs.push(json.value)
          this.setState({favorites: favs});
      });
    }
  }

  updateFavorites(e) {
    let favsID = this.state.favoritesIDs;
    let favs = this.state.favorites;

    if (e.target.classList.contains("clicked")) {
      favsID.push(e.target.id)
      this.setState({favoritesIDs: favsID})
      this.loadFavorites(e.target.id)
    } else {
      let newArr = favsID.filter(id => {
        if(id !== e.target.id){
          return id;
        }
      });
      this.setState({favoritesIDs: newArr});

      let arr = favs.filter((fav, i) => {
        if (fav.id != Number(e.target.id)) {
          return fav;
        }
      });
      this.setState({favorites: arr});
    };
  }

  favoritesIDsCheck(e) {
    if (this.state.favoritesIDs.indexOf(e.toString()) !== -1) {
      return "clicked"
    }
  }

  render(){
    localStorage.setItem("favorites", JSON.stringify(this.state.favoritesIDs));

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
