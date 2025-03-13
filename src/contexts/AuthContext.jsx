import React, { createContext, useContext, useState } from 'react'
import { postLogin, postSignup } from "../services/api";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)

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

  const logout = () => setAuthenticated(false)

  return (
    <AuthContext.Provider value={{ authenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  )
}