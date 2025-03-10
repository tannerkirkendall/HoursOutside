import "./Dashboard.css"
import { useState, useEffect } from "react";
import { postActivities, getActivities, patchActivities } from "../../services/api";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import ActivityModal from "../../components/ActivityModal/ActivityModal";
import ActivityButton from "../../components/ActivityButton/ActivityButton";


function Dashboard(){

    const [activities, setActivities] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
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

        const now = new Date().toUTCString();
        if (currentActivity.end_time === null){
            await patchActivities(null, now, null, currentActivity.id)
        } else {
            await postActivities(now)
        }
        
        setRefresh(true)
    }

    const loadingStyle = {
        'background-color': loading ? ' #2baf90' : ' #f1a512' 
      };

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
            <ActivityModal isOpen={isModalOpen} onClose={closeModal} activity={openActivity} />
            <div className="top">
                
                <div className="statCols topLeft">
                    <div className="statRows tl-top">
                        <span className="statDesc">Today:</span> 
                        <br/>
                        <span className="statValue">4h 15m</span>
                    </div>

                    <div className="statRows tl-bottom">
                        <span className="statDesc">This Week:</span>
                        <br/>
                        <span className="statValue">14h 32m</span>
                    </div>

                </div>
                
                <div className="statCols topMiddle">
                    <ActivityButton loading={loading} currentActivity={currentActivity} onButtonClick={stopActivity} />
                    
                    
                </div>

                <div className="statCols topRight">
                    <div className="statRows tl-top">
                        <span className="statDesc">This Month:</span>
                        <br/>
                        <span className="statValue">54h 9m</span>
                    </div>

                    <div className="statRows tl-bottom">
                        <span className="statDesc">This Year:</span>
                        <br/>
                        <span className="statValue">154h 45m</span>
                    </div>
                </div>

                {/* {<div>Current Activity: {currentActivity.id}</div>}
                {/* {error && <div className="error-message">{error}</div>} */}

            </div>

            <div className="feed" >

     
                

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