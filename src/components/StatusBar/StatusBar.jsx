import './StatusBar.css'
import ActivityButton from "../../components/ActivityButton/ActivityButton";

function StatusBar({loading, currentActivity, stopActivity}){

    return( 
        <div className="top">
            <div className="statCols topLeft">
                <div className="statRows tl-top">
                    <span className="statDesc">Today:</span> 
                    <br/>
                    <span className="statValue">4h 15m</span>
                </div>

                <div className="statRows tl-bottom">
                    <span className="statDesc">This Week:</span>
                    <br/>
                    <span className="statValue">14h 32m</span>
                </div>

            </div>
            
            <div className="statCols topMiddle">
                <ActivityButton loading={loading} currentActivity={currentActivity} onButtonClick={stopActivity} />
            </div>

            <div className="statCols topRight">
                <div className="statRows tr-top">
                    <span className="statDesc">This Month:</span>
                    <br/>
                    <span className="statValue">54h 9m</span>
                </div>

                <div className="statRows tl-bottom">
                    <span className="statDesc">This Year:</span>
                    <br/>
                    <span className="statValue">154h 45m</span>
                </div>
            </div>
        </div>
    )

}

export default StatusBar