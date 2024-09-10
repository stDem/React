import React from 'react'
import { useContext } from 'react'
import { UserContext } from './AppUserProfile'

export default function Header() {
    const userName = useContext(UserContext)
  return (
    <section>
      <h1>Hello {userName}</h1>
    </section>
  )
}
