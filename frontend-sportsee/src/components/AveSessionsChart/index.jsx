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

import CustomCursor from './utils/CustomCursor'
import CustomToolTip from './utils/CustomToolTip'

import formatDataService from '../../services/formatDataService'
import './styles/aveSessionsChart.scss'

function AveSessionsChart(props) {
  const { data, titleGraph } = props

  return (
    <ResponsiveContainer width="100%" height="100%">
      <h2 className="titleSessionsChart">{titleGraph}</h2>

      <LineChart
        data={data.sessions}
        margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={false}
          vertical={false}
        />
        <XAxis
          dataKey="day"
          tickMargin={15}
          axisLine={false}
          tickLine={false}
          stroke="white"
          tickFormatter={formatDataService.formatDay}
          mirror={true}
          fill="var(--text-color-light-1)"
          fillOpacity="60%"
          interval={'preserveStartEnd'}
          padding={{ right: 30, left: 30 }}
        />
        <YAxis hide={true} domain={['dataMin-30', 'dataMax+30']} />
        <Tooltip content={<CustomToolTip />} cursor={<CustomCursor />} />

        <defs>
          <linearGradient id="lineGradient">
            <stop
              offset="0%"
              stopColor="var(--text-color-light-1)"
              stopOpacity="30%"
            />
            <stop
              offset="100%"
              stopColor="var(--text-color-light-1)"
              stopOpacity="100%"
            />
          </linearGradient>
        </defs>

        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="url(#lineGradient)"
          fill="var(--text-color-light-1)"
          dot={false}
          strokeWidth={3}
          activeDot={{
            stroke: 'var(--text-color-light-1)',
            strokeOpacity: 0.4,
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
