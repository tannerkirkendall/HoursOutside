import { useState, useEffect } from "react";
import "./ActivityButton.css"

function ActivityButton({loading, currentActivity, onButtonClick}){

        const [buttonState, setButtonState] = useState('ready');

        useEffect(() => {   
            if (loading===true){
                setButtonState("loading")
                return;
            }

            if (currentActivity?.end_time === null){
                setButtonState("stop")
            }else{
                setButtonState("start")
            }

          }, [loading, currentActivity]);

    return (
        <div>
            {buttonState === "start" && <button className="start" onClick={onButtonClick}> <span class="material-icons md-48">&#xe037;</span> </button>}
            {buttonState === "loading" && <button className="loading"> <span class="material-icons md-48">&#xe88b;</span></button>}
            {buttonState === "stop" && <button className="stop" onClick={onButtonClick}> <span class="material-icons md-48">&#xe047;</span> </button>}
        </div>


    )

}

export default ActivityButton