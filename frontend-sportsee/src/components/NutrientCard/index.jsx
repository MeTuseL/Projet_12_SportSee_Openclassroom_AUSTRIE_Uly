import PropTypes from 'prop-types'

function NutrientCard(props) {
  const { picture, name, nutrientCount } = props
  return (
    <div>
      <img src={picture} alt="" />
      <div>
        <span>{nutrientCount}</span>
        <span>{name}</span>
      </div>
    </div>
  )
}
//add type to props
NutrientCard.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nutrientCount: PropTypes.number.isRequired,
}
export default NutrientCard
