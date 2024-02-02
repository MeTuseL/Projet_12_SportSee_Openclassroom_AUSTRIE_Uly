import PropTypes from 'prop-types'
import { Text } from 'recharts'

/**
 * This component renders a custom kind label for chart performance.
 *
 * @category Components/Utils
 * @component
 * @returns { React.JSX.Element } A React element that renders a custom kind label for chart performance.
 */
function CustomKindLabel(props) {
  const { formatKind, payload, points, x, y, cx, cy, ...rest } = props

  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 10}
      x={x + (x - cx) / 100}
      fill="var(--text-color-light-1)"
      fontSize="var(--font-size-14)"
    >
      {formatKind(payload.value)}
    </Text>
  )
}
CustomKindLabel.propTypes = {
  /**
   * A function that formats the name of the kind and returns the translated kind.
   */
  formatKind: PropTypes.func.isRequired,
  /**
   * Payload of the Kind.
   */
  payload: PropTypes.object,
  /**
   *  X position of label.
   */
  x: PropTypes.number,
  /**
   *  Y position of label.
   */
  y: PropTypes.number,
  /**
   *  X center position of label.
   */
  cx: PropTypes.number,
  /**
   *  Y center position of label.
   */
  cy: PropTypes.number,
  /**
   *  Rest of props.
   */
  rest: PropTypes.object,
}
export default CustomKindLabel
