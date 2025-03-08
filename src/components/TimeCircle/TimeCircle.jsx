import "./TimeCircle.css"
import { useState } from "react";

function Circle({timeSpan, complete}) {

    const divStyle = {
        border: complete ? '13px solid rgb(126, 255, 122)' : '13px solid rgb(255, 213, 122)' 
      };

    return (
        
        <div className="outerCircle" style={divStyle}>
            <div className="timeSpan">{timeSpan}</div>
        </div>
        
        
    ) 
}

export default Circle;