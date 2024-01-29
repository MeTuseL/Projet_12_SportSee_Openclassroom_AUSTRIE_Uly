import PropTypes from 'prop-types'
import { Sector } from 'recharts'

function CustomActiveShape(props) {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props

  return (
    <g>
      <text
        className="text-value"
        x={cx}
        y={cy - 20}
        dy={8}
        textAnchor="middle"
        fill="#282D30"
      >
        {`${payload.value}%`}
      </text>
      <text
        className="text-name"
        x={cx}
        y={cy + 10}
        dy={5}
        textAnchor="middle"
        fill="#74798C"
      >
        de votre
      </text>
      <text
        className="text-name"
        x={cx}
        y={cy + 30}
        dy={5}
        textAnchor="middle"
        fill="#74798C"
      >
        objectif
      </text>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        cornerRadius={50}
        stroke="none"
      />
    </g>
  )
}
//add type to props
CustomActiveShape.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  fill: PropTypes.string,
  payload: PropTypes.object,
}
export default CustomActiveShape
