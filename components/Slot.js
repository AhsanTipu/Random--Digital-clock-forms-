import React from "react";
import "../css/Design.css"

function Slot(props){
    const x=props.x;
    const y=props.y;
    const z=props.z;
console.log(props);
    if(x==y && y==z){
return(
    <div className="slot_in">
        <br />
<h1 className="emo">{x} {y} {z}</h1>

<h4 className="fo">This is Matching</h4>
    </div>
)
    }
    else{
        return(
        <div className="slot_in">
            <br />
        <h1 className="emo">{x} {y} {z}</h1>
        <h4 className="fo">This is not Matching</h4>
            </div>
)
    }

}

export default Slot;