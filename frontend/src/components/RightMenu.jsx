import PropTypes from 'prop-types'

import Close from '../assets/icons/close.svg'

import Location from '../assets/icons/location.svg'
import Search from '../assets/icons/search.svg'
import Gps from '../assets/icons/gps.svg'
import Target from '../assets/icons/target.svg'
import DateIcon from '../assets/icons/date.svg'
import TimeIcon from '../assets/icons/time.svg'

import Nasa from '../assets/icons/nasa.svg'
import Facebook from '../assets/icons/facebook.svg'
import Instagram from '../assets/icons/instagram.svg'
import Youtube from '../assets/icons/youtube.svg'
import { useEffect, useState } from 'react'

const RightMenu = ({ isMobile, isRightMenuActive, setIsRightMenuActive }) => {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: '',
    time: '',
  })

  const [userLocation, setUserLocation] = useState('Votre position')

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation(`${latitude} ; ${longitude}`)
        },
        (error) => {
          console.error('Error getting user location:', error)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const showTime = `${now.getHours()}:${String(now.getMinutes()).padStart(
        2,
        '0'
      )}:${String(now.getSeconds()).padStart(2, '0')}`
      const showDate = `${now.getDate()}/${String(now.getMonth() + 1).padStart(
        2,
        '0'
      )}/${now.getFullYear()}`
      setCurrentDateTime({ date: showDate, time: showTime })
    }

    updateDateTime()
    const intervalId = setInterval(updateDateTime, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className='rightMenu'>
      <div className='rightMenu_header'>
        <h2 className='rightMenu_header-title'>StarGazer</h2>
        <button
          className='rightMenu_header-close'
          onClick={() => setIsRightMenuActive(!isRightMenuActive)}
        >
          <img
            src={Close}
            width={isMobile ? 30 : 40}
            height={isMobile ? 30 : 40}
            className='rightMenu_header-icon'
            alt='Close side menu'
          />
        </button>
      </div>
      <div className='rightMenu_content'>
        <div className='rightMenu_content_section'>
          <h3 className='rightMenu_content-title'>Localisation :</h3>
          <div className='rightMenu_content-list'>
            <div className='rightMenu_content-element'>
              <div className='rightMenu_content-input'>
                <img src={Location} alt='Localisation' height={30} />
                <input
                  className='rightMenu_content-text'
                  placeholder='Grenoble, France'
                />
              </div>
              <button className='rightMenu_content-button'>
                <img
                  src={Search}
                  alt='Rechercher'
                  height={isMobile ? 30 : 40}
                />
              </button>
            </div>
            <div className='rightMenu_content-element'>
              <div className='rightMenu_content-input'>
                <img src={Gps} alt='Coordonnées GPS' height={30} />
                <h4 className='rightMenu_content-text'>{userLocation}</h4>
              </div>
              <button
                className='rightMenu_content-button'
                onClick={getUserLocation}
              >
                <img
                  src={Target}
                  alt='Géolocalisation'
                  height={isMobile ? 30 : 40}
                />
              </button>
            </div>
          </div>
        </div>
        <div className='rightMenu_content_section'>
          <h3 className='rightMenu_content-title'>Date & Heure :</h3>
          <div className='rightMenu_content-list'>
            <div className='rightMenu_content-element'>
              <div className='rightMenu_content-input'>
                <h4 className='rightMenu_content-text'>
                  {currentDateTime.date}
                </h4>
              </div>
              <button className='rightMenu_content-button'>
                <img
                  src={DateIcon}
                  alt='Choisir une date'
                  height={isMobile ? 30 : 40}
                />
              </button>
            </div>
            <div className='rightMenu_content-element'>
              <div className='rightMenu_content-input'>
                <h4 className='rightMenu_content-text'>
                  {currentDateTime.time}
                </h4>
              </div>
              <button className='rightMenu_content-button'>
                <img
                  src={TimeIcon}
                  alt='Choisir une heure'
                  height={isMobile ? 30 : 40}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='rightMenu_socials'>
        <img
          src={Nasa}
          width={40}
          height={40}
          className='rightMenu_socials-logo'
          alt='Nasa'
        />
        <img
          src={Facebook}
          width={40}
          height={40}
          className='rightMenu_socials-logo'
          alt='Facebook'
        />
        <img
          src={Instagram}
          width={40}
          height={40}
          className='rightMenu_socials-logo'
          alt='Instagram'
        />
        <img
          src={Youtube}
          width={40}
          height={40}
          className='rightMenu_socials-logo'
          alt='Youtube'
        />
      </div>
    </section>
  )
}

RightMenu.propTypes = {
  isRightMenuActive: PropTypes.bool.isRequired,
  setIsRightMenuActive: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
}

export default RightMenu
