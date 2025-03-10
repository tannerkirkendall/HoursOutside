import './StatusBar.css'

function StatusBar(){

    return(
        <div className="outer">
            <div className="startStop">
                Start
            </div>

            <div className="flex-item topStripe">
                <div className="timeTitle">
                    <span>This Week</span>
                </div>
                <div className="timeTotal">
                    <span>14 Hours 12 Minutes</span>
                </div>
            </div>

            <div className="flex-item middleStripe">
                <div className="timeTitle">
                        <span>This Month</span>
                    </div>
                    <div className="timeTotal">
                        <span>14 Hours 12 Minutes</span>
                </div>
            </div>

            <div className="flex-item bottomStripe">
                <div className="timeTitle">
                        <span>This Year</span>
                    </div>
                    <div className="timeTotal">
                        <span>720 Hours 12 Minutes</span>
                </div>
        </div>
        </div>
    )

}

export default StatusBar