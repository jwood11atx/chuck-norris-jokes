import React from 'react';
import { Link } from 'react-router';

import './header-style';

import Button from '../Button/Button';

const Header = (props) => {

  const linkCheck = () => {
    let { pathname } = props.location;
    let link = pathname[0] === "/" ? pathname.slice(1) : pathname;

    switch (link) {
      case "home":
        return <Button link="settings" label="Settings" />;
      case "favorites":
        return <Button link="jokes" label="Jokes"/>
      case "settings":
        return <Button link="jokes" label="Jokes"/>
        break;
      default:
      return <Button link="settings" label="Settings" />;
    }
  }

  return (
    <div className="header">
      <Link to={"home"} className="main-header"><h1>Chuck Norris Joke Machine</h1></Link>
      {linkCheck()}
    </div>
  );
}

export default Header;
