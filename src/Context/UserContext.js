import React, {useContext, useState} from 'react';

const UserContext = React.createContext();

const UserProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => {
        setIsLoggedIn(true);
    }; 
    const logout = () => {
        setIsLoggedIn(false);
    };
    return (
        <UserContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider};