import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
      <div>
      <h1>About Us</h1>
      <Link to={`/page/home`}>to Home Page</Link>
    </div>
  )
}
