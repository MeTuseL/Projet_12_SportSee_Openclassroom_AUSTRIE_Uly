import PropTypes from 'prop-types'
import '../styles/scoreChart.scss'

/**
 * This component renders a custom legend for chart score.
 *
 * @category Components/Utils
 * @component
 * @returns { React.JSX.Element } A React element that renders a custom legend for chart score.
 */
function CustomLegendScore(props) {
  const { score } = props
  return (
    <div className="customLegendScore">
      <p className="customLegendScore__title">
        <span className="customLegendScore__title__header">{`${score}%`}</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
  )
}
CustomLegendScore.propTypes = {
  /**
   * Formatted data score
   */
  score: PropTypes.number,
}
export default CustomLegendScore
