import { useEffect } from "react";
import { postLogin } from "../../services/api";

function Login(){
    
    useEffect(() => {
        const loadLogin = async () => await postLogin("test3@test1.com", "password");
    
        loadLogin();
      }, []);

    const handleSubmit = async (e) => {
          e.preventDefault()   
          try {
                  var utcStartTime = luxon.DateTime.fromISO(startTime)
                  var utcEndTime = luxon.DateTime.fromISO(endTime)
                  var a = await patchActivities(utcStartTime, utcEndTime, description, activity.id);
              } catch (err) {
              console.log(err)
              } finally {
                  onClose()
              }
        }
    return (
    
    <div className="login">
        <h2>You must login</h2>


    </div>
    );
}

export default Login;