import React from 'react'
import { NavLink } from 'react-router'

const NavItem = () => {
  return (
    <>
      <li className='nav-bar__nav-item'>
         <NavLink to={item.ruta} className="nav-bar__nav-link" />
      </li>
    </>
  )
}

export default NavItem