const BASE_URL = "https://starfish-app-xaufy.ondigitalocean.app";

export const postSignup = async () => {
    
}

export const getActivities = async () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiYjU3MDU2NC00NTc2LTQ3M2QtOWE5ZC02NzlhZTgwZDI4MGIiLCJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzQxMjE0MjQwLCJleHAiOjE3NDEyMTYwNDB9.cJuRMCiR4TzqiAc90NyoSqj5-V5zaUPZpF2-huYLbEs'
      };
    
      const options = {
        method: 'GET', // or POST, PUT, DELETE, etc.
        headers: headers
      };
    
      try {
        const response = await fetch(`${BASE_URL}/tracker`, options);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}