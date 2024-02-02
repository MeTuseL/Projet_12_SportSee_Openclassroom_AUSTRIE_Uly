import PropTypes from 'prop-types'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import CustomToolTip from './utils/CustomToolTip'
import CustomTickPolarAngleAxis from './utils/CustomTickPolarAngleAxis'

import formatDataService from '../../services/formatDataService'
import './styles/performanceChart.scss'

function PerformanceChart(props) {
  const { data } = props

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="70%" data={[...data.data].reverse()}>
        <PolarGrid radialLines={false} stroke="var(--text-color-light-1)" />
        <PolarAngleAxis
          dataKey="kind"
          tick={
            <CustomTickPolarAngleAxis
              formatKind={formatDataService.formatKind}
            />
          }
          tickLine={false}
          stroke="var(--text-color-light-1)"
          dy={5}
        />
        <PolarRadiusAxis
          axisLine={false}
          tick={false}
          domain={[0, 'dataMax + 15']}
          tickCount={7}
        />
        <Radar
          dataKey="value"
          stroke="var(--primary-color)"
          fill="var(--primary-color)"
          fillOpacity={0.5}
        />
        <Tooltip content={<CustomToolTip />} cursor={{ stroke: 'none' }} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
//add type to props
PerformanceChart.propTypes = {
  data: PropTypes.object.isRequired,
}
export default PerformanceChart
