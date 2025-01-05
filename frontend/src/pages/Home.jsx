import { useEffect, useState } from 'react'
import DesktopMask from '../assets/images/silhouette-mask-desktop.svg'
import MobileMask from '../assets/images/silhouette-mask-mobile.svg'
import Header from '../layout/Header'
import FiltersBar from '../components/FiltersBar'

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  const [isLeftMenuActive, setIsLeftMenuActive] = useState(false)
  const [isRightMenuActive, setIsRightMenuActive] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
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
        <Header />
        <FiltersBar />
      </div>
    </section>
  )
}

export default Home
