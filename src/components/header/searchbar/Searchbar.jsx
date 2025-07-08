
import { Link } from 'react-router'
import './Searchbar.scss'



const Searchbar = () => {

  return (
    <>
      <div className='search-bar'>
        <div className="search-bar__logo-container">
          <img className='search-bar__logo-img' src="/logo/me-logo.png" alt="logo me" />
        </div>
        <h1 className='search-bar__title'>LEDECO</h1>
        

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