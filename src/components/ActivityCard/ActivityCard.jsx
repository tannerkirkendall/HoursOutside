 import "./ActivityCard.css"

function ActivityCard({activity}) {
    
    function formatDate(date){
        if (date === null) return null;
        var r = luxon.DateTime.fromISO(date).toFormat("DDD 'at' t");
        return r;
    }

    function getTimeSpan(startTime, endTime){
        var spanString = "";
        var start = luxon.DateTime.fromISO(startTime);
        var end = luxon.DateTime.fromISO(endTime);
        var diff = (end.diff(start)).shiftTo('hours', 'minutes').toObject()
        console.log(diff);
        if (diff.hours > 0){
            spanString += `${diff.hours}h `
        }
        spanString += `${Math.round(diff.minutes)}m`
        return spanString;
    }
    
    return (
        <div className="main">
            <div className="topBox">

                <div className="profileImg">
                    <img src="../../public/avatar.svg"></img>
                </div>

                <div className="activityTime">
                    <span>{formatDate(activity.start_time)}</span> 
                </div>
            </div>

            <div className="bottomBox">
                <div className="activityStatus">
                    <span>{getTimeSpan(activity.start_time, activity.end_time)}</span>
                    
                </div>
                <div className="description">
                    <span>{activity.description}</span>
                </div>
            </div>




            {/* <img src="../../public/avatar.svg"></img>
            <span>Start Time: {formatDate(activity.start_time)}</span> 
            <span>End Time: {formatDate(activity.end_time)}</span> 
            <span>Description: {activity.description}</span> 
            <span>Activity Id: {activity.id}</span> 
            <span>User Id: {activity.user_id}</span>  */}
        </div>
    )

}

export default ActivityCard