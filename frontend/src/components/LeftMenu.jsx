import PropTypes from 'prop-types'

import Close from '../assets/icons/close.svg'

import CloseStar from '../assets/objects/close-star.svg'
import ShinyStar from '../assets/objects/shiny-star.svg'
import HotStar from '../assets/objects/hot-star.svg'
import BigStar from '../assets/objects/big-star.svg'
import Planet from '../assets/objects/planet.svg'
import Constellation from '../assets/objects/constellation.svg'

import Nasa from '../assets/icons/nasa.svg'
import Facebook from '../assets/icons/facebook.svg'
import Instagram from '../assets/icons/instagram.svg'
import Youtube from '../assets/icons/youtube.svg'
import LeftMenuFilter from './LeftMenuFilter'

const LeftMenu = ({
  isMobile,
  isLeftMenuActive,
  setIsLeftMenuActive,
  fetchStars,
  starType,
}) => {
  const handleFilterClick = (type) => {
    fetchStars(type)
  }
  return (
    <section className='leftMenu'>
      <div className='leftMenu_header'>
        <button
          className='leftMenu_header-close'
          onClick={() => setIsLeftMenuActive(!isLeftMenuActive)}
        >
          <img
            src={Close}
            width={isMobile ? 30 : 40}
            height={isMobile ? 30 : 40}
            className='leftMenu_header-icon'
            alt='Close side menu'
          />
        </button>
        <h2 className='leftMenu_header-title'>StarGazer</h2>
      </div>
      <div className='leftMenu_filters'>
        <h3 className='leftMenu_filters-title'>Objets célestes :</h3>
        <div className='leftMenu_filters-list'>
          <LeftMenuFilter
            src={CloseStar}
            alt='Étoiles proches'
            name='Étoiles proches'
            isActive={starType === 'closest'}
            onClick={() => handleFilterClick('closest')}
          />
          <LeftMenuFilter
            src={ShinyStar}
            alt='Étoiles brillantes'
            name='Étoiles brillantes'
            isActive={starType === 'brightest'}
            onClick={() => handleFilterClick('brightest')}
          />
          <LeftMenuFilter
            src={HotStar}
            alt='Étoiles chaudes'
            name='Étoiles chaudes'
            isActive={starType === 'hottest'}
            onClick={() => handleFilterClick('hottest')}
          />
          <LeftMenuFilter
            src={BigStar}
            alt='Étoiles grosses'
            name='Étoiles grosses'
            isActive={starType === 'biggest'}
            onClick={() => handleFilterClick('biggest')}
          />
          <LeftMenuFilter
            src={Constellation}
            alt='Constellations'
            name='Constellations'
            isActive={starType === 'constellations'}
            onClick={() => handleFilterClick('constellations')}
          />
          <LeftMenuFilter
            src={Planet}
            alt='Planètes'
            name='Planètes'
            isActive={false}
            onClick={() => handleFilterClick('')}
          />
        </div>
      </div>
      <div className='leftMenu_socials'>
        <img
          src={Nasa}
          width={40}
          height={40}
          className='leftMenu_socials-logo'
          alt='Nasa'
        />
        <img
          src={Facebook}
          width={40}
          height={40}
          className='leftMenu_socials-logo'
          alt='Facebook'
        />
        <img
          src={Instagram}
          width={40}
          height={40}
          className='leftMenu_socials-logo'
          alt='Instagram'
        />
        <img
          src={Youtube}
          width={40}
          height={40}
          className='leftMenu_socials-logo'
          alt='Youtube'
        />
      </div>
    </section>
  )
}

LeftMenu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isLeftMenuActive: PropTypes.bool.isRequired,
  setIsLeftMenuActive: PropTypes.func.isRequired,
  fetchStars: PropTypes.func.isRequired,
  starType: PropTypes.string.isRequired,
}

export default LeftMenu
