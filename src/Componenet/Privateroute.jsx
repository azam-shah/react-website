import React from 'react';
import { Navigate } from 'react-router-dom';

const isLoggedIn = () => {
  return localStorage.getItem('authToken') !== null;
};

const Privateroute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/Login" />;
};

export default Privateroute;
