import PropTypes from 'prop-types'
import styles from './styles/nutrientCard.module.scss'

/**
 * This component renders a nutrient card.
 *
 * @category Components
 * @component
 * @returns  { React.JSX.Element } A React element that renders a nutrient card.
 */

function NutrientCard(props) {
  const { picture, name, nutrientQuantity } = props
  return (
    <div className={styles.container}>
      <img className={styles.container__icon} src={picture} alt={name} />
      <div className={styles.container__nutrient}>
        <span className={styles.container__nutrient__quantity}>
          {nutrientQuantity}
        </span>
        <span className={styles.container__nutrient__name}>{name}</span>
      </div>
    </div>
  )
}
NutrientCard.propTypes = {
  /**
   * Picture path of the card.
   */
  picture: PropTypes.string.isRequired,
  /**
   * Name of the card.
   */
  name: PropTypes.string.isRequired,
  /**
   * Nutrient quantity with its unit -> From the Api data.
   */
  nutrientQuantity: PropTypes.string.isRequired,
}
export default NutrientCard
