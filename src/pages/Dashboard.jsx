import { useState, useEffect } from "react";
import { postActivities, getActivities, patchActivities } from "../services/api";
import ActivityCard from "../components/ActivityCard/ActivityCard";
import ActivityModal from "../components/ActivityModal/ActivityModal"


function Dashboard(){

    const [activities, setActivities] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openActivity, setOpenActivity] = useState({});
    const [currentActivity, setCurrentActivity] = useState({});

    const openModal = () => {
        setIsModalOpen(true);
    };
  
    const closeModal = () => {
        setRefresh(true)
        setIsModalOpen(false);
    };

    const stopActivity = async (e) => {
        
        console.log("end_time", currentActivity.end_time )
        console.log("id", currentActivity.id )

        const now = new Date().toUTCString();
        if (currentActivity.end_time === undefined || currentActivity.end_time === null){
            await patchActivities(null, now, null, currentActivity.id)
        } else {
            await postActivities(now)
        }
        
        setRefresh(true)
    }

    useEffect(() => {
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
                setLoading(false);
                setRefresh(false)
            }
        }
        loadActivities();
      }, [refresh]);
    

    return (
        <div className="dashboard">
            <h2>Start tracking your hours here</h2>
            {/* <span className="material-symbols-outlined">play_arrow</span> */}

            <button onClick={stopActivity}>{(currentActivity.end_time === undefined || currentActivity.end_time === null) ? 'Stop' : 'Start'}</button>
            {<div>Current Activity: {currentActivity.id}</div>}
            {<div>Loading: {loading ? 'Active' : 'Inactive'}</div>}
            {error && <div className="error-message">{error}</div>}

            <ActivityModal isOpen={isModalOpen} onClose={closeModal} activity={openActivity} />

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
    );
}

export default Dashboard;