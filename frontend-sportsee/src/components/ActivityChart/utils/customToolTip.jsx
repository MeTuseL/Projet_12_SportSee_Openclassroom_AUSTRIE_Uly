import PropTypes from 'prop-types'
import '../styles/activityChart.scss'

function CustomTooltip(props) {
  const { active, payload, barOneUnit, barTwoUnit } = props
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipActivity">
        <p>{`${payload[0].value}${barOneUnit}`}</p>
        <p>{`${payload[1].value}${barTwoUnit}`}</p>
      </div>
    )
  }

  return null
}
//add type to props
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  barOneUnit: PropTypes.string,
  barTwoUnit: PropTypes.string,
}
export default CustomTooltip
