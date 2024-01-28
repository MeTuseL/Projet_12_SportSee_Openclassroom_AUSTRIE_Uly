import PropTypes from 'prop-types'

function CustomTooltip(props) {
  const { active, payload, barOneUnit, barTwoUnit } = props
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{ color: 'white', backgroundColor: '#E60000' }}
      >
        <p className="desc">{`${payload[0].value}${barOneUnit}`}</p>
        <p className="desc2">{`${payload[1].value}${barTwoUnit}`}</p>
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
