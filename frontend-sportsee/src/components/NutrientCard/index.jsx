import PropTypes from 'prop-types'
import styles from './styles/nutrientCard.module.scss'

function NutrientCard(props) {
  const { picture, name, nutrientCount } = props
  return (
    <div className={styles.container}>
      <img className={styles.container__icon} src={picture} alt={name} />
      <div className={styles.container__nutrient}>
        <span className={styles.container__nutrient__count}>
          {nutrientCount}
        </span>
        <span className={styles.container__nutrient__name}>{name}</span>
      </div>
    </div>
  )
}
//add type to props
NutrientCard.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nutrientCount: PropTypes.string.isRequired,
}
export default NutrientCard
