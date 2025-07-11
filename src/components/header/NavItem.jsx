
import { NavLink } from 'react-router'

const NavItem = ({item}) => {
  const handleClick = () => {
    const menuToggle = document.getElementById('menu')
    if (menuToggle && menuToggle.checked) {
      menuToggle.checked = false
    }
  }

  return (
    <li className='nav-bar__nav-item'>
      <NavLink to={item.ruta} className="nav-bar__nav-link" onClick={handleClick}>
        {item.nombre}
      </NavLink>
    </li>
  )
}

export default NavItem