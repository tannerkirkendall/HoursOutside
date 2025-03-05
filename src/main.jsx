import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCizTBicajaIy7j1gz62Waq2Fpn9YYbMFc",
  authDomain: "hoursoutsidereact.firebaseapp.com",
  projectId: "hoursoutsidereact",
  storageBucket: "hoursoutsidereact.firebasestorage.app",
  messagingSenderId: "392868723511",
  appId: "1:392868723511:web:9af3b2b5da65f5f566b8b2",
  measurementId: "G-72YBPCSZ7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
