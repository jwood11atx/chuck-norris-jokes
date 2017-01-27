import React from "react";
import Button from '../Button/Button';


const Settings = (props) => {

  const getName = () => {
    if (document.querySelector(".name-input")) {
      return document.querySelector(".name-input").value
    }
  }

  return(
    <div>
      <div>
        <p>Set Name: </p>
        <input type="text"
               className="name-input"
               placeholder="example: John Doe"
               onChange={(e) => props.changeName(e.target.value)}
               />
        <Button handleChange={props.changeName}
                name={document.querySelector(".name-input")}
                label="Set" />
      </div>

      <form>
        <p>Adult Mode: </p>
        <input type="radio"
               className="onRadio"
               value="On"
               onChange={(e) => props.radioToggle(e)}
               checked={props.state.selected === "on"}/> On
        <input type="radio"
               className="offRadio"
               value="Off"
               onChange={(e) => props.radioToggle(e)}
               checked={props.state.selected === "off"}/> Off
      </form>
    </div>
  )
}

export default Settings;
