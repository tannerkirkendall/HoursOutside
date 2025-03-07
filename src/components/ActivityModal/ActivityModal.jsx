import "./ActivityModal.css"
import React, { useEffect, useState } from 'react';
import { patchActivities } from "../../services/api";


const Modal = ({ isOpen, onClose, activity }) => {
  if (!isOpen) {
    return null;
  }

  const [startTime, setStartTime] = useState(formatDate(activity.start_time));
  const [endTime, setEndTime] = useState(formatDate(activity.end_time));
  const [description, setDescription] = useState(activity.description);

    // useEffect(() => {
    //     setStartTime(formatDate(activity.start_time))
    //     setEndTime(formatDate(activity.end_time))
    //     setDescription(activity.description)
    // }, []);


  function formatDate(date){
    if (date === null) return null;
    const dte = new Date(date).toISOString().slice(0, 16);
    return dte;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("m-startTime", startTime)
    console.log("m-endTIme", endTime)
    console.log("m-description", description)
    console.log("m-id", activity.id)        
    try {
            var a = await patchActivities(startTime, endTime, description, activity.id);
        } catch (err) {
        console.log(err)
            // setError("Failed to load activities...");
        } finally {
            onClose()
        }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
            <h2>Enter your time</h2>


            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="startdatetime">Start Date and Time:</label>
                <input type="datetime-local" id="startdatetime" className="startdatetime" defaultValue={startTime} onChange={(event)=> setStartTime(event.target.value)} required/>
            </div>
            
            <div className="form-group">
                <label htmlFor="enddatetime">End Date and Time:</label>
                <input type="datetime-local" id="enddatetime" className="enddatetime" defaultValue={endTime} onChange={(event)=> setEndTime(event.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea id="description" className="description" rows="4" defaultValue={description} onChange={(event)=> setDescription(event.target.value)}></textarea>
            </div>

            <div className="form-group">
                <input type="submit" value="Submit"/>
            </div>
        </form>

      </div>
    </div>
  );
};

export default Modal;
