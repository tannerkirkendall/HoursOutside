import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { checkStillLoggedIn } = useAuth()

  return checkStillLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute