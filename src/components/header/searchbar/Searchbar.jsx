import React from 'react'
import { Link } from 'react-router'

const Searchbar = () => {
  return (
    <>
      <div className='search-bar'>
        <div className="search-bar__logo-container">
          <img className='search-bar-logo-img' src="" alt="logo m" />
        </div>

        <form action="#" className='search-bar__form-container'>
          <label htmlFor="busqueda" className='search-bar__form-label'>
            <img className='search-bar__logo-search' src="" alt="logo del buscador" />
          </label>
          <input type="search" id="busqueda" className='search-bar__form-search' />
          <button type='submit' className='search-bar__form-submit'>Buscar</button>
        </form>

        <div className="search-bar__carrito-container">
          <Link to="/carrito" className='search-bar__cart-link'>
            <img className='search-bar__cart-logo' src="" alt="logo carro" />
            {contarProductosCarritoContex > 0 && (
              <span className='search-bar__cart-logo'>{contarProductosCarritoContex}</span>
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