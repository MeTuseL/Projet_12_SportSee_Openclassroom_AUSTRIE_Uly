import PropTypes from 'prop-types'
import { Rectangle } from 'recharts'

function CustomCursor(props) {
  const { points, width, height } = props
  const { x, y } = points[0]
  return (
    <Rectangle
      fill="#000000"
      fillOpacity="10%"
      x={x}
      y={y}
      width={width}
      height={height}
      style={{ transition: 'all ease-out 0.5s' }}
    />
  )
}
//add type to props
CustomCursor.propTypes = {
  points: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
}
export default CustomCursor
