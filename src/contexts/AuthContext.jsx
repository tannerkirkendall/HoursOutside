import React, { createContext, useContext, useState, useEffect } from 'react'
import { postLogin, postSignup, getCookie, eraseCookie } from "../services/api";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)

  const checkStillLoggedIn = () => {
    var token = getCookie('auth');
    console.log("token", token);
    if (token?.length > 0){
      setAuthenticated(true)
      console.log("yes", token);
      return true;
    }
    setAuthenticated(false)
    console.log("no", token);
    return false;
  }

  useEffect(() => {
    checkStillLoggedIn();
  }, []);



  const login = async (email, password) => {
    var response = await postLogin(email, password);
    if (response.ok){
      console.log("pass", response)
      setAuthenticated(true)
    }else{
      console.log("fail", response)
    }
    return response;
  }

  const signup = async (email, password) => {
    var response = await postSignup(email, password);
    if (response.ok){
      console.log("pass", response)
      setAuthenticated(true)
    }else{
      console.log("fail", response)
    }
    return response;
  }

  const logout = () => {
    eraseCookie('auth')
    setAuthenticated(false)
  }
  return (
    <AuthContext.Provider value={{ authenticated, login, logout, signup, checkStillLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}