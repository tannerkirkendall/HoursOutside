import "./Dashboard.css"
import { useState, useEffect } from "react";
import { postActivities, getActivities, patchActivities } from "../../services/api";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import ActivityModal from "../../components/ActivityModal/ActivityModal";
import StatusBar from "../../components/StatusBar/StatusBar";

function Dashboard(){

    const [activities, setActivities] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openActivity, setOpenActivity] = useState({});
    const [currentActivity, setCurrentActivity] = useState({});

    const openModal = () => {
        setIsModalOpen(true);
    };
  
    const closeModal = () => {
        loadActivities();
        setIsModalOpen(false);
    };

    const stopActivity = async (e) => {
        setLoading(true);
        const now = new Date().toUTCString();
        if (currentActivity.end_time === null){
            await patchActivities(null, now, null, currentActivity.id)
        } else {
            await postActivities(now)
        }

        loadActivities();  
    }

    const loadActivities = async () => {
        setLoading(true);
        try {
            var a = await getActivities();
            setActivities(a.id);

            if (a.id[0]!==undefined && a.id[0].end_time !== undefined)
            {
                setCurrentActivity(a.id[0])
            }

        } catch (err) {
            setError("Failed to load activities...");
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadActivities();
    }, []);
    

    return (
        <div className="dashboard">
            <ActivityModal isOpen={isModalOpen} onClose={closeModal} activity={openActivity} />
            <div className="top">
                
            <StatusBar loading={loading} currentActivity={currentActivity} stopActivity={stopActivity}/>

            </div>

            <div className="feed" >
                
                {activities.length === 0 && <div className="noActivities">Click Play To Start Your First Activity</div>}
                
                <div>
                    {activities.map((activity, index) => (
                        <div onClick={() => {
                            openModal()
                            setOpenActivity(activity)
                        }} key={index}>
                            <ActivityCard activity={activity} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Dashboard;