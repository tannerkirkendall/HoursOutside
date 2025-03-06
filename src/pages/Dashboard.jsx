import { useState, useEffect } from "react";
import { getActivities } from "../services/api";

function Dashboard(){

    const [activities, setActivities] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        const loadActivities = async () => {
            setLoading(true);
            try {
                var a = await getActivities();
                console.log(a.id);
                setActivities(a.id);
            } catch (err) {
                setError("Failed to load activities...");
            } finally {
                setLoading(false);
            }
        }
        loadActivities();
      }, []);
    

    return (
    
    <div className="login">
        <h2>Start tracking your hours here</h2>

        {loading && <div>Loading</div>}

        {error && <div className="error-message">{error}</div>}

        <div>
            {activities.map((activity, index) => (
                <div key={index}>
                    <span>Start Time: {activity.start_time}</span> <br/>
                    <span>End Time: {activity.end_time}</span> <br/>
                    <span>Description: {activity.description}</span> <br/>
                    <span>Activity Id: {activity.id}</span> <br/>
                    <span>User Id: {activity.user_id}</span>
                </div>
            ))}
        </div>

    </div>
    );
}

export default Dashboard;