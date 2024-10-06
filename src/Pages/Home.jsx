import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
       <NavBar button ="Home"/>
       <NavBar button ="Cart"/>
       <NavBar button ="Items"/>
       <Link to={"/Items"}>GO</Link>
    </div>
  )
}
