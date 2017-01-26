import React from 'react';
import './header-style';

import Button from '../Button/Button';

const Header = () => {


  return (
    <div className="Header">
      <h1>Chuck Norris Joke Machine</h1>
      <Button link="settings" label="Settings" />
    </div>
  );
}

export default Header;
