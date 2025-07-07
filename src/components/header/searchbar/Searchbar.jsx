import { useContext } from 'react'
import { Link } from 'react-router'
import './Searchbar.scss'
import CarritoContext from '../../../context/CarritoContext'


const Searchbar = () => {

  const {contarProductosCarritoContext} = useContext(CarritoContext)

  return (
    <>
      <div className='search-bar'>
        <div className="search-bar__logo-container">
          <img className='search-bar__logo-img' src="/logo/me-logo.png" alt="logo me" />
        </div>

        <form action="#" className='search-bar__form-container'>
          <label htmlFor="busqueda" className='search-bar__form-label'>
            <img className='search-bar__logo-search' src="/logo/logo-search.png" alt="logo del buscador" />
          </label>
          <input type="search" id="busqueda" className='search-bar__form-search' />
          <button type='submit' className='search-bar__form-submit'>Buscar</button>
        </form>

        <div className="search-bar__carrito-container">
          <Link to="/carrito" className='search-bar__cart-link'>
            <img className='search-bar__cart-logo' src="/logo/cart-logo.webp" alt="logo carro" />
            {contarProductosCarritoContext > 0 && (
              <span className='search-bar__cart-count'>{contarProductosCarritoContext}</span>
            )}
          </Link>
        </div>

        <div className="menu-toogle">
          <label htmlFor="menu" className='menu-toogle__label'>
            <span className="menu-toogle__top-bread"></span>
            <span className="menu-toogle__meat"></span>
            <span className="menu-toogle__bottom-bread"></span>
          </label>
        </div>
      </div>
    </>
  )
}

export default Searchbar