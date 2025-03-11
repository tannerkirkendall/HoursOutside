import './StatusBar.css'
import ActivityButton from "../../components/ActivityButton/ActivityButton";

function StatusBar({loading, currentActivity, stopActivity, statTimes}){

    return( 
        <div className="top">
            <div className="statCols topLeft">
                <div className="statRows tl-top">
                    <span className="statDesc">Today:</span> 
                    <br/>
                    <span className="statValue">{statTimes?.day?.hours ?? 0}h {statTimes?.day?.minutes ?? 0}m</span>
                </div>

                <div className="statRows tl-bottom">
                    <span className="statDesc">This Week:</span>
                    <br/>
                    <span className="statValue">{statTimes?.week?.hours ?? 0}h {statTimes?.week?.minutes ?? 0}m</span>
                </div>

            </div>
            
            <div className="statCols topMiddle">
                <ActivityButton loading={loading} currentActivity={currentActivity} onButtonClick={stopActivity} />
            </div>

            <div className="statCols topRight">
                <div className="statRows tr-top">
                    <span className="statDesc">This Month:</span>
                    <br/>
                    <span className="statValue">{statTimes?.month?.hours ?? 0}h {statTimes?.month?.minutes ?? 0}m</span>
                </div>

                <div className="statRows tl-bottom">
                    <span className="statDesc">This Year:</span>
                    <br/>
                    <span className="statValue">{statTimes?.year?.hours ?? 0}h {statTimes?.year?.minutes ?? 0}m</span>
                </div>
            </div>
        </div>
    )

}

export default StatusBar