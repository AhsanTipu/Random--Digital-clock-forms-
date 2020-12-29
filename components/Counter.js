import React, { useState } from 'react';
import "../css/Design.css";


const Counter =()=>{
    const state=useState();
    const [count,setCount]=useState(0);

    const Inc=() =>{
        setCount(count+1);
    }
    return(
        <div>
            <br />
            <h1 className="nm">{count}</h1>
            <br />
            <button className='btn' onClick={Inc}>Increment</button>
        </div>
    )
}

export default Counter;