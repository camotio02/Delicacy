import React, { createContext, useState } from 'react';
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const updateUser = (newUser) => {
        setUser(newUser);
    };
    const contextValue = {
        user,
        updateUser,
    };
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};