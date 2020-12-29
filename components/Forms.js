import React, { useState } from "react";
import '../css/Design.css';

const Forms = () =>{
const [name,setName] =useState();
const [fullNa,setFn] =useState();


const setN = (events) =>{
    setName(events.target.value)
}

const setNa =()=>{
setFn(name);
}

return(

<div>
    <h1>Hello {fullNa}</h1>
    <input type="text" placeholder="Enter your name" onChange={setN} className="ffi"/>
    <br />
    <br />
    <button className="btn" onClick={setNa}>Change ⭐</button>
</div>
)
}

export default Forms;