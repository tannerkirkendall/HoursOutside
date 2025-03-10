import "./TimeCircle.css"
import { useState } from "react";

function Circle({timeSpan, complete}) {

    const divStyle = {
        border: complete ? '13px solid #2baf90' : '13px solid #f1a512' 
    };

    return (
        
        <div className="outerCircle" style={divStyle}>
            <div className="timeSpan">{timeSpan}</div>
        </div>
        
        
    ) 
}

export default Circle;