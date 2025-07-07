import './Header.scss'
import Navbar from './navbar/Navbar'
import Searchbar from './searchbar/Searchbar'

const Header = () => {
  return (
    <>
      <header className='main-header'>
        <input type="checkbox" id="menu" />
        <Navbar />
        <Searchbar />

      </header>
    </>
  )
}

export default Header