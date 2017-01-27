import React from "react";
import Button from '../Button/Button';
import "./settings-styles";


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
                link="jokes"
                name={document.querySelector(".name-input")}
                label="Set" />

        <Button handleChange={props.changeName}
                name={document.querySelector(".name-input")}
                label="Reset" />
      </div>

      <form>
        <p>Adult Mode: </p>
        {/* <div className="switch-container">
          <article>On</article>
          <label className="switch">
            <input type="checkbox" />
            <div className="slider round"></div>
          </label>
          <article>Off</article>
        </div> */}
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
