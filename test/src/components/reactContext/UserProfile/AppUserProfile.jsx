import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import Header from './Header';
import Profile from './Profile';
import Footer from './Footer';

export const UserContext = createContext('Guest');
export const ThemeContext = createContext('light');

export default function AppUserProfile() {
    const [theme, setTheme] = useState('light');
    const [userName, setUserName] = useState('Guest');

    function changeUserName(e) {
        let newUserName = e.target.closest('div').querySelector('input').value;
        setUserName(newUserName);
        newUserName='';
    };

    const toggleTheme=()=>setTheme((prevTheme)=> (prevTheme === 'light'?'dark':'light'));

    
  return (
    <>
        <ThemeContext.Provider value={theme}>
            <UserContext.Provider value={userName}>
                <Header/>
                <div>
                    <input/>
                    <button onClick={changeUserName}>Edit User Name</button>
                </div>
                <Profile/>
                <Footer/>
                <div>
                    <button onClick={toggleTheme}>Change Theme</button>
                </div>
            </UserContext.Provider>
        </ThemeContext.Provider>
    </>
  );
};
