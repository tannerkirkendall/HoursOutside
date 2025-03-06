import "./ActivityModal.css"
import React, { useState } from 'react';


const Modal = ({ isOpen, onClose, activity }) => {
  if (!isOpen) {
    return null;
  }

  function formatDate(date){
    if (date === null) return null;
    const dte = new Date(date).toISOString().slice(0, 16);
    return dte;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
            <h2>Enter your time</h2>


            <form action="/submit" method="POST">
            <div class="form-group">
                <label for="startdatetime">Start Date and Time:</label>
                <input type="datetime-local" id="startdatetime" className="startdatetime" value={formatDate(activity.start_time)} required/>
            </div>
            
            <div class="form-group">
                <label for="enddatetime">End Date and Time:</label>
                <input type="datetime-local" id="enddatetime" className="enddatetime" value={formatDate(activity.end_time)}/>
            </div>

            <div class="form-group">
                <label for="description">Description:</label>
                <textarea id="description" className="description" rows="4" value={activity.description}></textarea>
            </div>

            <div class="form-group">
                <input type="submit" value="Submit"/>
            </div>
        </form>

      </div>
    </div>
  );
};

export default Modal;
