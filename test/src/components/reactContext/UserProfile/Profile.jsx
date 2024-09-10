import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './AppUserProfile'
import classes from './Profile.module.css'

export default function Profile() {
    const theme = useContext(ThemeContext);
  return (
    <section className={theme==='light'?`${classes.light}`:`${classes.dark}`}>
        <h2>Profile</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi nobis odio quisquam praesentium dolor, itaque nam laboriosam magnam sit possimus ab earum enim! Maiores, debitis ullam! Culpa dolorem dolor iusto? Dolor sapiente autem commodi, tempora nisi ad vitae natus laudantium eligendi tenetur expedita asperiores voluptatem ratione amet enim. Dolores!</p>
    </section>
  )
}
