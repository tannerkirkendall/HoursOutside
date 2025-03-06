 import "./ActivityCard.css"

function ActivityCard({activity}) {
    
    return (
        <div className="main">
            <span>Start Time: {activity.start_time}</span> <br/>
            <span>End Time: {activity.end_time}</span> <br/>
            <span>Description: {activity.description}</span> <br/>
            <span>Activity Id: {activity.id}</span> <br/>
            <span>User Id: {activity.user_id}</span> <br />
        </div>
    )

}

export default ActivityCard