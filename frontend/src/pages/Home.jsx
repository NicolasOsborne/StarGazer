import { useEffect, useState } from 'react'
import DesktopMask from '../assets/images/silhouette-mask-desktop.svg'
import MobileMask from '../assets/images/silhouette-mask-mobile.svg'
import Header from '../layout/Header'
import FiltersBar from '../components/FiltersBar'
import LeftMenu from '../components/LeftMenu'
import RightMenu from '../components/RightMenu'
import StarsTable from '../components/StarsTable'

import {
  fetchBiggestStars,
  fetchBrightestStars,
  fetchClosestStars,
  fetchHottestStars,
  fetchConstellations,
} from '../api/api'

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isLeftMenuActive, setIsLeftMenuActive] = useState(false)
  const [isRightMenuActive, setIsRightMenuActive] = useState(false)
  const [isStarsTableVisible, setIsStarsTableVisible] = useState(false)
  const [stars, setStars] = useState([])
  const [starType, setStarType] = useState('')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const fetchStars = async (type) => {
    if (type === starType) {
      setIsStarsTableVisible(false)
      setStarType('')
      return
    }
    setIsStarsTableVisible(true)
    setStarType(type)
    try {
      let response
      switch (type) {
        case 'closest':
          response = await fetchClosestStars()
          break
        case 'brightest':
          response = await fetchBrightestStars()
          break
        case 'hottest':
          response = await fetchHottestStars()
          break
        case 'biggest':
          response = await fetchBiggestStars()
          break
        case 'constellations':
          response = await fetchConstellations()
          break
        default:
          throw new Error('Invalid type')
      }
      setStars(response.data)
      setIsLeftMenuActive(false)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <section className='home'>
      <img
        className='mask'
        src={isMobile ? MobileMask : DesktopMask}
        alt='Forest Mask'
      />
      <div className='home-wrapper'>
        <Header
          setIsLeftMenuActive={setIsLeftMenuActive}
          setIsRightMenuActive={setIsRightMenuActive}
        />
        <FiltersBar />
        {isStarsTableVisible && (
          <StarsTable
            setIsStarsTableVisible={setIsStarsTableVisible}
            stars={stars}
            starType={starType}
            setStarType={setStarType}
          />
        )}
      </div>
      {isLeftMenuActive && (
        <LeftMenu
          isLeftMenuActive={isLeftMenuActive}
          setIsLeftMenuActive={setIsLeftMenuActive}
          isMobile={isMobile}
          setIsStarsTableVisible={setIsStarsTableVisible}
          fetchStars={fetchStars}
          starType={starType}
        />
      )}
      {isRightMenuActive && (
        <RightMenu
          isRightMenuActive={isRightMenuActive}
          setIsRightMenuActive={setIsRightMenuActive}
          isMobile={isMobile}
        />
      )}
    </section>
  )
}

export default Home
