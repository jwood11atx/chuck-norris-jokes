import React from 'react';
import { Link } from 'react-router';

import "./button-style"

const Button = (props) => {

  const linkCheck = () => {
    let refs = props.jokecount.refs;
    if(Object.keys(refs).length !== 0){
      return refs.numField.value ? false : true;
    }
  }

  return props.handleChange ?
        <Link to={props.link}
          className={props.link}
          onClick={() =>   props.handleChange(props.link, props.jokecount.refs.numField.value)}>
          <button disabled={linkCheck()}>
            {props.label}
          </button>
        </Link>
    :
      <Link to={props.link}
            className={props.link}>{props.label}</Link>;

  }

export default Button;
