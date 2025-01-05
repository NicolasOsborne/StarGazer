import Stars from '../assets/icons/stars.svg'
import Constellations from '../assets/icons/constellations.svg'
import Planets from '../assets/icons/planets.svg'
import FilterIcon from './FilterIcon'
import { useState } from 'react'

const FiltersBar = () => {
  const [selectedFilters, setSelectedFilters] = useState([])
  const handleFilterClick = (filterName) => {
    setSelectedFilters((previouslySelected) => {
      if (previouslySelected.includes(filterName)) {
        return previouslySelected.filter((name) => name != filterName)
      } else {
        return [...previouslySelected, filterName]
      }
    })
  }

  return (
    <section className='filtersBar'>
      <FilterIcon
        name='Étoiles'
        icon={Stars}
        isSelected={selectedFilters.includes('Étoiles')}
        onClick={() => handleFilterClick('Étoiles')}
      />
      <FilterIcon
        name='Constellations'
        icon={Constellations}
        isSelected={selectedFilters.includes('Constellations')}
        onClick={() => handleFilterClick('Constellations')}
      />
      <FilterIcon
        name='Planètes'
        icon={Planets}
        isSelected={selectedFilters.includes('Planètes')}
        onClick={() => handleFilterClick('Planètes')}
      />
    </section>
  )
}

export default FiltersBar
