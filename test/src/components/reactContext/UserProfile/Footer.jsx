import React, { useState } from 'react'
import classes from './Profile.module.css'
import { useContext } from 'react'
import { ThemeContext } from './AppUserProfile'



export default function Footer() {
    const theme = useContext(ThemeContext)
    const [now, setNow] = useState(new Date());

    setInterval(()=>{
        setNow(new Date());
    }, 1000);

  return (
    <>
        <section className={theme==='light'?`${classes.light}`:`${classes.dark}`}>
            <h2>Footer</h2>
            <p>Time: {now.toLocaleTimeString()}</p>
        </section>
    </>
  )
}
