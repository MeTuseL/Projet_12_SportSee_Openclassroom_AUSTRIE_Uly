import PropTypes from 'prop-types'

function CustomTooltip(props) {
  const { active, payload } = props
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: 'white' }}>
        <p className="desc">{payload[0].value}</p>
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
