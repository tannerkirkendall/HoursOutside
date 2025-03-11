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
    const [statTimes, setStatTimes] = useState({});

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

    const calcToday = (a) => {
        var day = luxon.DateTime.now().startOf('day');
        var week = luxon.DateTime.now().startOf('week');
        var month = luxon.DateTime.now().startOf('month');
        var year = luxon.DateTime.now().startOf('year');

        var daySeconds = 0;
        var weekSeconds = 0;
        var monthSeconds = 0;
        var yearSeconds = 0;

        a.forEach(e =>{

            var st = luxon.DateTime.fromISO(e.start_time);
            var et = luxon.DateTime.fromISO(e.end_time);
            
            if (et.c !== null){
                var seconds = et.diff(st, 'seconds').toObject().seconds;
                if (st >= day) {
                    daySeconds += seconds;
                }
    
                if (st >= week) {
                    weekSeconds += seconds;
                }
    
                if (st >= month) {
                    monthSeconds += seconds;
                }
    
                if (st >= year) {
                    yearSeconds += seconds;
                } 
            }

        })
        
        var statTimes = {
            day: secondsToHoursMinutes(daySeconds),
            week: secondsToHoursMinutes(weekSeconds),
            month: secondsToHoursMinutes(monthSeconds),
            year: secondsToHoursMinutes(yearSeconds)
        }

        console.log("end", statTimes)

        setStatTimes(statTimes)
    }

    function secondsToHoursMinutes(seconds) {
        const hours = Math.floor(seconds / 3600);
        const remainingSeconds = seconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
      
        return { hours, minutes };
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
        calcToday(a.id);
    }



    useEffect(() => {
        loadActivities();
    }, []);
    

    return (
        <div className="dashboard">
            <ActivityModal isOpen={isModalOpen} onClose={closeModal} activity={openActivity} />
            
            <div className="top">
                <StatusBar loading={loading} currentActivity={currentActivity} stopActivity={stopActivity} statTimes={statTimes}/>
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