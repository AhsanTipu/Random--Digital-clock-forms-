import React, { useState } from 'react';
import "../css/Design.css";

function Time(){
    const state=useState();

    const [time,setTime]=useState(new Date().toLocaleTimeString());

    function setTi(){
        setTime(new Date().toLocaleTimeString())
    }
    setInterval(setTi,1000);
    return(
        <div>
            <h1>{time}</h1>
            <button className="btn" onClick={setTi}>Set Time</button>
        </div>
    )
}
export default Time;