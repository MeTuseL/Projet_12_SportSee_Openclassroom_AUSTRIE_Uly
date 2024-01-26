import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from 'recharts'

import PropTypes from 'prop-types'

function SimpleLineChart(props) {
  const { data, titleGraph } = props

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: 'white' }}>
          <p className="desc">{`${payload[0].value} min`}</p>
        </div>
      )
    }

    return null
  }
  //
  // const listLabelDay = [
  //   { d: 1, label: 'L' },
  //   { d: 2, label: 'M' },
  //   { d: 3, label: 'M' },
  //   { d: 4, label: 'J' },
  //   { d: 5, label: 'V' },
  //   { d: 6, label: 'S' },
  //   { d: 7, label: 'D' },
  // ]
  const listLabelDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const formatDay = (value) => {
    // if (listLabelDay[value - 1].d === value) {
    //   return listLabelDay[value - 1].label
    // }
    return listLabelDay[value - 1]
  }
  //
  const CustomCursor = (props) => {
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
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      style={{ position: 'relative' }}
    >
      <h2
        style={{
          position: 'absolute',
          margin: '0',
          color: 'white',
          fontSize: '20px',
          opacity: '60%',
          top: '55px',
          zIndex: '1',
          left: '55px',
        }}
      >
        {titleGraph}
      </h2>

      <LineChart
        data={data}
        margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={false}
          vertical={false}
          fill="#FF0000"
        />
        <XAxis
          dataKey="day"
          tickMargin={15}
          axisLine={false}
          tickLine={false}
          stroke="white"
          tickFormatter={formatDay}
          mirror={true}
          fill="#FFFFFF"
          fillOpacity="60%"
          interval={'preserveStartEnd'}
          padding={{ right: 30, left: 30 }}
        />
        <YAxis hide={true} domain={['dataMin-30', 'dataMax+30']} />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />

        <defs>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="30%" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
          </linearGradient>
        </defs>

        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="url(#lineGradient)"
          fill="white"
          dot={false}
          strokeWidth={3}
          activeDot={{
            stroke: 'rgba(255, 255, 255, 0.198345)',
            strokeWidth: '10px',
            r: 5,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
//add type to props
SimpleLineChart.propTypes = {
  data: PropTypes.array.isRequired,
  titleGraph: PropTypes.string.isRequired,
}
export default SimpleLineChart
