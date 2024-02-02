import PropTypes from 'prop-types'
import '../styles/aveSessionsChart.scss'

/**
 * This component renders a custom tooltip for chart average sessions.
 *
 * @category Components/Utils
 * @component
 * @returns { React.JSX.Element } A React element that renders a custom tooltip for chart average sessions.
 */
function CustomTooltipAveSessions(props) {
  const { active, payload } = props
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipSessions">
        <p>{`${payload[0].value} min`}</p>
      </div>
    )
  }

  return null
}
CustomTooltipAveSessions.propTypes = {
  /**
   * The tooltip is active or not.
   */
  active: PropTypes.bool,
  /**
   * Payload of the tooltip.
   */
  payload: PropTypes.array,
}
export default CustomTooltipAveSessions
