 import "./ActivityCard.css"
 import Circle from "../TimeCircle/TimeCircle"

function ActivityCard({activity}) {

    function formatDate(date){
        if (date === null) return null;
        var r = luxon.DateTime.fromISO(date).toFormat("DDD 'at' t");
        return r;
    }

    function getTimeSpan(startTime, endTime){
        var spanString = "";
        if (endTime === null) return "Have Fun!";
        var start = luxon.DateTime.fromISO(startTime);
        var end = luxon.DateTime.fromISO(endTime);
        var diff = (end.diff(start)).shiftTo('hours', 'minutes').toObject()
        if (diff.hours > 0){
            spanString += `${diff.hours}h `
        }
        spanString += `${Math.round(diff.minutes)}m`
        return spanString;
    }

    function isActivityComplete(){
        if (activity.end_time === null)
            return false
        return true
    }

    return (
        <div className="main">
            <div className="leftBox">
                <Circle timeSpan={getTimeSpan(activity.start_time, activity.end_time)} complete={isActivityComplete()} />
            </div>

            <div className="rightBox">

                <div className="activityTime">
                    <span className="activityStartTime">{formatDate(activity.start_time)}</span>
                </div>
                <div className="description">
                    <span className="activityDesctiption">{activity.description}</span>
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