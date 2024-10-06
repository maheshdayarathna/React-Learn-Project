import React from 'react'
import './navBar.css'

export default function NavBar(props) {
  return (
    <div>
      <div className="navBar">
            <span className='text'>this is {props.button}</span>
      </div>
    </div>
  )
}
