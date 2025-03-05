import { useEffect } from "react";
import { getActivities } from "../services/api";

function Dashboard(){

    useEffect(() => {
        const loadActivities = async () => {
         
            const activities = await getActivities();
   
        };
    
        loadActivities();
      }, []);
    

    return (
    
    <div className="login">
        <h2>Start tracking your hours here</h2>

        
    </div>
    );
}

export default Dashboard;