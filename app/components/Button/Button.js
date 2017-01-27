import React from 'react';
import { Link } from 'react-router';

import "./button-style"

const Button = (props) => {

  const linkCheck = () => {
    if(props.jokecount){
      let refs = props.jokecount.refs;
      if(Object.keys(refs).length !== 0){
        return refs.numField.value ? false : true;
      }
    }
  }

  const functionNameCheck = () => {
    if (props.label === "Set") {
      props.name ?
        props.handleChange(props.name.value)
      :
        props.handleChange("Chuck Norris")

    } else if (props.label === "Get Jokes!"){
      props.handleChange(props.link, props.jokecount.refs.numField.value)
    } else if (props.label === "Favorites") {
      props.favIDs.forEach(id => {
        props.handleChange(id)
      })
    } else if (props.label === "Reset") {
      props.name.value = "";
    }
  }


  return props.handleChange ?
      <Link to={props.link}
            className="link"
            onClick={() =>
              functionNameCheck()}>
        <button className={`${props.link} ${props.label}`}
                disabled={linkCheck()}>
          {props.label}
        </button>
      </Link>
    :
      <Link to={props.link} className="link">
        <button className={`${props.link} ${props.label}`}>
          {props.label}
        </button>
      </Link>;

  }

export default Button;
