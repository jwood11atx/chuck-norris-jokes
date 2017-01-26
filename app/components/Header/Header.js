import React from 'react';
import './header-style';

import Button from '../Button/Button';

const Header = (props) => {

  const linkCheck = () => {
    let { pathname } = props.location;
    let link = pathname[0] === "/" ? pathname.slice(1) : pathname;

    return link === "settings" ?
    <Button link="jokes" label="Jokes"/>
    : 
    <Button link="settings" label="Settings" />
  }

  return (
    <div className="Header">
      <h1>Chuck Norris Joke Machine</h1>
      {linkCheck()}
    </div>
  );
}

export default Header;
