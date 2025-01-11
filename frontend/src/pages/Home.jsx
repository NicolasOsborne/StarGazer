import { useEffect, useState } from 'react'
import DesktopMask from '../assets/images/silhouette-mask-desktop.svg'
import MobileMask from '../assets/images/silhouette-mask-mobile.svg'
import Header from '../layout/Header'
import FiltersBar from '../components/FiltersBar'
import LeftMenu from '../components/LeftMenu'
import RightMenu from '../components/RightMenu'

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  const [isLeftMenuActive, setIsLeftMenuActive] = useState(false)
  const [isRightMenuActive, setIsRightMenuActive] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
      </div>
      {isLeftMenuActive && (
        <LeftMenu
          isLeftMenuActive={isLeftMenuActive}
          setIsLeftMenuActive={setIsLeftMenuActive}
          isMobile={isMobile}
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
