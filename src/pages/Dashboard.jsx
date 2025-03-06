import { useState, useEffect } from "react";
import { getActivities } from "../services/api";
import ActivityCard from "../components/ActivityCard/ActivityCard";
import ActivityModal from "../components/ActivityModal/ActivityModal"

function Dashboard(){

    const [activities, setActivities] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openActivity, setOpenActivity] = useState({});
    const [currentActivity, setCurrentActivity] = useState({});

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    useEffect(() => {
        
        const loadActivities = async () => {
            setLoading(true);
            try {
                var a = await getActivities();
                setActivities(a.id);
                if (a.id[0]!==null && a.id[0].end_time !== null){
                    setCurrentActivity(a.id[0])
                }
            } catch (err) {
                setError("Failed to load activities...");
            } finally {
                setLoading(false);
            }
        }
        loadActivities();
      }, []);
    

    return (
    
    <div className="dashboard">
        <h2>Start tracking your hours here</h2>
        {<div>Current Activity {currentActivity.end_time}</div>}
        <button onClick={() => {
            setOpenActivity({})
            openModal()
        }}>Start</button>
        {loading && <div>Loading</div>}
        {error && <div className="error-message">{error}</div>}

        <ActivityModal isOpen={isModalOpen} onClose={closeModal} activity={openActivity} />

        <div>
            {activities.map((activity, index) => (
                <div onClick={() => {
                    setOpenActivity(activity)
                    openModal()
                }} key={index}>
                    <ActivityCard activity={activity} />
                </div>
            ))}
        </div>

    </div>
    );
}

export default Dashboard;