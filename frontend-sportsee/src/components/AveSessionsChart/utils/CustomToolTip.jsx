import PropTypes from 'prop-types'
import '../styles/aveSessionsChart.scss'

function CustomTooltip(props) {
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
//add type to props
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
export default CustomTooltip
