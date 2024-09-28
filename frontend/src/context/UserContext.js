// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    _id: '',
    token: '',
    email: '',
    password: '',
    countryOfResidence: '',
    role: '',
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dateOfBirth: { month: '', date: '', year: '' },
  });
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (userData._id) {
      setLoading(false); // Set loading to false when userData is set
    }
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData, loading }}>
      {children}
    </UserContext.Provider>
  );
};
