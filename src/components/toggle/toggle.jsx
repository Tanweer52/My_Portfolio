// import React from 'react'
import "./toggle.css";
// import Sun from "../../img/Sun.png";
// import Moon from "../../img/Moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

function Toggle() {

const theme=useContext(ThemeContext);

const handleClick=()=>{
  theme.dispatch({type:"toggle"})
}


  return (
    <div className="t">
      
      {/* <img src={} alt="" className="t-icon" /> */}
      {/* <img src={} alt="" className="t-icon" /> */}

       <div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode?0 :25}}>
        
       </div>
    </div>
  )
}

export default Toggle
