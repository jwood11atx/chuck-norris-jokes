import React from "react";
import Button from '../Button/Button';


const Settings = (props) => {

  return(
    <div>
      <div>
        <p>Set Name: </p>
        <input type="text" placeholder="example: John Doe" />
        <Button />
        <Button />
      </div>

      <form>
        <p>Adult Mode: </p>
        <input type="radio" className="onRadio" value="On" onChange={props.radioToggle} checked={props.state.selected === "on"}/> On
        <input type="radio" className="offRadio" value="Off" onChange={props.radioToggle} checked={props.state.selected === "off"}/> Off
      </form>
    </div>
  )
}

export default Settings;
