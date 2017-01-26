import React from 'react';
import { Link } from 'react-router';

import "./button-style"

const Button = (props) => {

  const inputCheck = (e) => {
    let num = props.jokecount.refs.numField.value;
    if (num) {
        props.handleChange(props.link, num)
    }
    //  num ?
    //   props.handleChange(props.link, num)
    // :
    //   e.preventDefault();
  }

  return props.handleChange ?
      <Link to={props.link}
            className={props.type}
            onClick={(e) => inputCheck(e)}
            disabled>{props.label}</Link>
    :
      <Link to={props.link}
            className={props.type}>{props.label}</Link>;

  }

export default Button;
