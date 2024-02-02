import PropTypes from 'prop-types'
import { Rectangle } from 'recharts'

/**
 * This component renders a custom rectangle cursor for chart average sessions.
 *
 * @category Components/Utils
 * @component
 * @returns { React.JSX.Element } A React element that renders a custom rectangle cursor for chart average sessions.
 */
function CustomCursorAveSessions(props) {
  const { points, width, height } = props
  const { x, y } = points[0]
  return (
    <Rectangle
      fill="#000000"
      fillOpacity="10%"
      x={x}
      y={y - 50}
      width={width}
      height={height + 100}
      style={{ transition: 'all ease-out 0.3s' }}
    />
  )
}
CustomCursorAveSessions.propTypes = {
  /**
   * Array of the current position of the cursor coordinate x and y.
   */
  points: PropTypes.array,
  /**
   * Width of tooltip.
   */
  width: PropTypes.number,
  /**
   * Height of tooltip.
   */
  height: PropTypes.number,
}
export default CustomCursorAveSessions
