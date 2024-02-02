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
import CustomTooltipPerformance from './utils/CustomTooltipPerformance'
import CustomKindLabel from './utils/CustomKindLabel'
import formatDataService from '../../services/formatDataService'
import './styles/performanceChart.scss'

/**
 * This component renders a performance chart using recharts.
 *
 * @category Components
 * @component
 * @returns  { React.JSX.Element } A React element that renders a performance chart using recharts.
 */
function PerformanceChart(props) {
  const { data } = props

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="70%" data={[...data.data].reverse()}>
        <PolarGrid radialLines={false} stroke="var(--text-color-light-1)" />
        <PolarAngleAxis
          dataKey="kind"
          tick={<CustomKindLabel formatKind={formatDataService.formatKind} />}
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
        <Tooltip
          content={<CustomTooltipPerformance />}
          cursor={{ stroke: 'none' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
PerformanceChart.propTypes = {
  /**
   * Average sessions data of user -> From the Api data.
   */
  data: PropTypes.object.isRequired,
}
export default PerformanceChart
