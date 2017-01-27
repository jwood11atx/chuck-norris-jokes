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

    } else {
      props.handleChange(props.link, props.jokecount.refs.numField.value)
    }
  }

  return props.handleChange ?
      <Link to={props.link}
            className={props.link}
            onClick={() =>
              functionNameCheck()}>
        <button disabled={linkCheck()}>
          {props.label}
        </button>
      </Link>
    :
      <Link to={props.link}
            className={props.link}>{props.label}</Link>;

  }

export default Button;
