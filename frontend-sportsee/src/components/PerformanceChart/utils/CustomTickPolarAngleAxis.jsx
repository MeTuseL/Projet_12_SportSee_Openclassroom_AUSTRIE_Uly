import PropTypes from 'prop-types'
import { Text } from 'recharts'

function CustomTickPolarAngleAxis(props) {
  const { formatKind, payload, x, y, cx, cy, ...rest } = props

  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 10}
      x={x + (x - cx) / 100}
      fill="var(--text-color-light-1)"
      fontSize="var(--font-size-14)"
    >
      {formatKind ? formatKind(payload.value) : payload.value}
    </Text>
  )
}
//add type to props
CustomTickPolarAngleAxis.propTypes = {
  formatKind: PropTypes.func,
  payload: PropTypes.object,
  x: PropTypes.number,
  y: PropTypes.number,
  cx: PropTypes.number,
  cy: PropTypes.number,
  rest: PropTypes.object,
}
export default CustomTickPolarAngleAxis
