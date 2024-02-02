import PropTypes from 'prop-types'
import '../styles/activityChart.scss'

/**
 * This component renders a custom tooltip for chart activity.
 *
 * @category Components/Utils
 * @component
 * @returns { React.JSX.Element } A React element that renders a custom tooltip for chart activity.
 */
function CustomTooltipActivity(props) {
  const { active, payload } = props
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipActivity">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    )
  }

  return null
}
CustomTooltipActivity.propTypes = {
  /**
   * The tooltip is active or not.
   */
  active: PropTypes.bool,
  /**
   * Payload of the tooltip.
   */
  payload: PropTypes.array,
}
export default CustomTooltipActivity
