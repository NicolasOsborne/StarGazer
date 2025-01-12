import PropTypes from 'prop-types'

import Visible from '../assets/icons/visible.svg'
import Hidden from '../assets/icons/hidden.svg'

const LeftMenuFilter = ({ src, alt, name, isActive, onClick }) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <button
      className={`leftMenuFilter ${isActive ? 'visible' : ''}`}
      onClick={handleClick}
    >
      <div className='leftMenuFilter_title'>
        <img
          className='leftMenuFilter_icon'
          src={src}
          alt={alt}
          height={36}
          width={36}
        />
        <h4 className='leftMenuFilter_name'>{name}</h4>
      </div>
      <div className='leftMenuFilter_visibility'>
        {isActive ? (
          <img
            className='leftMenuFilter_visible'
            src={Visible}
            alt='Visible'
            height={40}
          />
        ) : (
          <img
            className='leftMenuFilter_hidden'
            src={Hidden}
            alt='Hidden'
            height={40}
          />
        )}
      </div>
    </button>
  )
}

LeftMenuFilter.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default LeftMenuFilter
