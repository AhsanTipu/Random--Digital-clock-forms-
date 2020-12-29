import React, { useState } from "react";
import "../css/Design.css";

const Events =() =>{
    const color="#000000"
    const [bg,setBg] = useState(color);
const [name,setName] = useState("Click Me 😄");

const setB=()=>{
    let ab="#0000FF";
      setBg(ab);
      setName("Chokas !! 🥰");
}

return(
    <div style={{backgroundColor:bg}}>
<button className="btn" onClick={setB}>{name}</button>
    </div>
)

}

export default Events;