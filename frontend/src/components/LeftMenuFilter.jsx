import PropTypes from 'prop-types'

import Visible from '../assets/icons/visible.svg'
import Hidden from '../assets/icons/hidden.svg'
import { useState } from 'react'

const LeftMenuFilter = ({ src, alt, name }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={`leftMenuFilter ${isVisible ? 'visible' : ''}`}>
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
      <button
        className='leftMenuFilter_visibility'
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? (
          <img className='leftMenuFilter_visible' src={Visible} alt='Visible' />
        ) : (
          <img className='leftMenuFilter_hidden' src={Hidden} alt='Hidden' />
        )}
      </button>
    </div>
  )
}

LeftMenuFilter.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default LeftMenuFilter
