import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li><NavLink to="/Add">Add User</NavLink></li>
                <li><NavLink to="/show">Show Users</NavLink></li>
                <li><NavLink  to="/update">update User</NavLink></li>
                <li><NavLink  to="/delete">delete User</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar