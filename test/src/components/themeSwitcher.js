import { useState } from "react";
import MessagesList from "./list";
import Button from '@mui/material/Button';




export default function ThemeSwitcher() {
    const [theme, setTheme] = useState("background_light")
    
    function switchTheme() {
        theme === "background_light" ? setTheme("background_dark") : setTheme("background_light");
    }
        
    return ( 
        <>
            <Button onClick={switchTheme} variant="contained">Switch Theme</Button>
            <MessagesList background_theme={theme} />
        </>
     );
};




