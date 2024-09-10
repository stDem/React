import React from 'react';
import { useState } from 'react';
import { useContext } from "react";
import { createContext } from "react";

// create context
const ThemeContext = createContext();

const ThemedButton = () => { 
    // to access context
    const theme = useContext(ThemeContext);

    return (
        <button style={{background: theme.background, color: theme.foreground}}>
            Themed Button
        </button>
    );

 };

 export default function ThemedContext() {
    const [theme, setTheme] = useState({background: 'lightgray', foreground: 'black'});
  
   return (
    <ThemeContext.Provider value = {theme}>
        <div>
            <h1>Using React.Context</h1>
            <ThemedButton/>
            <button onClick={()=>setTheme({background:'black', foreground:'white'})}>
                Change Theme
            </button>
        </div>

    </ThemeContext.Provider>

   );
 };
 
 