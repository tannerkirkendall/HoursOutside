 import "./ActivityCard.css"

function ActivityCard({activity}) {
    
    function formatDate(date){
        if (date === null) return null;
        var r = new Date(date).toLocaleString()
        return r;
    }
    
    return (
        <div className="main">
            <span>Start Time: {formatDate(activity.start_time)}</span> <br/>
            <span>End Time: {formatDate(activity.end_time)}</span> <br/>
            <span>Description: {activity.description}</span> <br/>
            <span>Activity Id: {activity.id}</span> <br/>
            <span>User Id: {activity.user_id}</span> <br />
        </div>
    )

}

export default ActivityCard