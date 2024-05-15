import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });
    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);

            window.localStorage.setItem(key, JSON.stringify(valueToStore));

        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
}



export const UserProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', false);
    const [userdata, setUserData] = useLocalStorage('userdata', { token: null, admin: false });

    const loginUser = (userData) => {
        setUser(true);
        setUserData(userData);
    };

    const logoutUser = () => {
        setUser(false);
        setUserData({ token: null, admin: false });
    };

    return (
        <UserContext.Provider
            value={{
                user,
                userdata,
                loginUser,
                logoutUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
