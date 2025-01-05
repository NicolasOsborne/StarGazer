import PropTypes from 'prop-types'

import BurgerMenu from '../assets/icons/burger-menu.svg'
import LocationMenu from '../assets/icons/location-menu.svg'

const Header = ({ setIsLeftMenuActive, setIsRightMenuActive }) => {
  return (
    <nav className='header'>
      <button className='header_leftMenu' onClick={setIsLeftMenuActive}>
        <img
          src={BurgerMenu}
          width={40}
          height={40}
          className='header_leftMenu_icon'
          alt='Open side menu'
        />
      </button>
      <button className='header_rightMenu' onClick={setIsRightMenuActive}>
        <img
          src={LocationMenu}
          width={40}
          height={40}
          className='header_rightMenu_icon'
          alt='Open side menu'
        />
      </button>
    </nav>
  )
}

Header.propTypes = {
  setIsLeftMenuActive: PropTypes.func.isRequired,
  setIsRightMenuActive: PropTypes.func.isRequired,
}

export default Header
