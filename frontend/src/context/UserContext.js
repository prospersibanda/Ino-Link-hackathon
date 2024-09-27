// UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
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

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
