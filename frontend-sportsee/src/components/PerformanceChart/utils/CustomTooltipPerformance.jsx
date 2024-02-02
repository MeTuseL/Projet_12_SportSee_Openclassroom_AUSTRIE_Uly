import PropTypes from 'prop-types'
import '../styles/performanceChart.scss'

/**
 * This component renders a custom tooltip for chart performance.
 *
 * @category Components/Utils
 * @component
 * @returns { React.JSX.Element } A React element that renders a custom tooltip for chart performance.
 */
function CustomTooltipPerformance(props) {
  const { active, payload } = props
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipPerformance">
        <p>{payload[0].value}</p>
      </div>
    )
  }

  return null
}
CustomTooltipPerformance.propTypes = {
  /**
   * The tooltip is active or not.
   */
  active: PropTypes.bool,
  /**
   * Payload of the tooltip.
   */
  payload: PropTypes.array,
}
export default CustomTooltipPerformance
