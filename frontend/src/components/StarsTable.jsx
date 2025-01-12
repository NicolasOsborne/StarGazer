import PropTypes from 'prop-types'

import Close from '../assets/icons/close.svg'
import CloseStar from '../assets/objects/close-star.svg'
import BrightStar from '../assets/objects/shiny-star.svg'
import HotStar from '../assets/objects/hot-star.svg'
import BigStar from '../assets/objects/big-star.svg'
import Planet from '../assets/objects/planet.svg'
import Constellation from '../assets/objects/constellation.svg'

const StarsTable = ({
  setIsStarsTableVisible,
  stars,
  starType,
  setStarType,
}) => {
  const getHeaderContent = () => {
    switch (starType) {
      case 'closest':
        return { img: CloseStar, title: 'Étoiles proches' }
      case 'brightest':
        return { img: BrightStar, title: 'Étoiles brillantes' }
      case 'hottest':
        return { img: HotStar, title: 'Étoiles chaudes' }
      case 'biggest':
        return { img: BigStar, title: 'Étoiles grandes' }
      case 'constellations':
        return { img: Constellation, title: 'Constellations' }
      case 'planets':
        return { img: Planet, title: 'Planètes' }
      default:
        return { img: CloseStar, title: 'Étoiles' }
    }
  }

  const { img, title } = getHeaderContent()

  const handleClose = () => {
    setIsStarsTableVisible(false)
    setStarType('')
  }

  return (
    <section className='starsTable'>
      <div className='starsTable_header'>
        <div className='starsTable_header-left'>
          <img src={img} alt='Etoiles proches' height={20} />
          <h3 className='starsTable_header-title'>{title}</h3>
        </div>
        <button className='starsTable_header-close' onClick={handleClose}>
          <img src={Close} alt='Fermer la table' height={20} />
        </button>
      </div>
      <table className='starsTable_table'>
        <thead className='starsTable_table-head'>
          <tr>
            <th>Nom :</th>
            <th>HIP :</th>
            <th>HD :</th>
            <th>HR :</th>
            <th>GL :</th>
            <th>BF :</th>
            <th>Mag :</th>
            <th>Dist :</th>
            <th>Const :</th>
          </tr>
        </thead>
        <tbody className='starsTable_table-content'>
          {stars.map((star, index) => (
            <tr key={`${star.id}-${index}`}>
              <td className='starName'>{star.proper}</td>
              <td>{star.hip}</td>
              <td>{star.hd}</td>
              <td>{star.hr}</td>
              <td>{star.gl}</td>
              <td>{star.bf}</td>
              <td>{star.mag}</td>
              <td>{star.dist}</td>
              <td>{star.con}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

StarsTable.propTypes = {
  setIsStarsTableVisible: PropTypes.func.isRequired,
  stars: PropTypes.array.isRequired,
  starType: PropTypes.string.isRequired,
  setStarType: PropTypes.func.isRequired,
}

export default StarsTable
