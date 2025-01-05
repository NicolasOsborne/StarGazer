import PropTypes from 'prop-types'

const FilterIcon = ({ name, icon, isSelected, onClick }) => {
  return (
    <button
      className={`filter ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <img
        className='filter_icon'
        src={icon}
        height={30}
        width={30}
        alt='Filter'
        style={{ fill: isSelected ? '$color-green' : '$color-grey' }}
      />
      <p className='filter_name'>{name}</p>
    </button>
  )
}

FilterIcon.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default FilterIcon
