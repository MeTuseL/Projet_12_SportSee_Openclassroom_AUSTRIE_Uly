import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import PropTypes from 'prop-types'

import CustomCursor from './CustomCursor'
import CustomToolTip from './CustomToolTip'

function AveSessionsChart(props) {
  const { data, titleGraph } = props

  const listLabelDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const formatDay = (value) => {
    return listLabelDay[value - 1]
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
        data={data.sessions}
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
        <Tooltip content={<CustomToolTip />} cursor={<CustomCursor />} />

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
AveSessionsChart.propTypes = {
  data: PropTypes.object.isRequired,
  titleGraph: PropTypes.string.isRequired,
}
export default AveSessionsChart
