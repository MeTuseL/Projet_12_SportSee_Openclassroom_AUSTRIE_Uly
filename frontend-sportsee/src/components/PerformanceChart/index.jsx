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

function PerformanceChart(props) {
  const { data } = props
  //
  const translatedKind = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
  }
  const formatKind = (value) => {
    return translatedKind[value]
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        outerRadius="60%"
        data={[...data.data].reverse()}
        style={{ backgroundColor: '#282D30' }}
      >
        <PolarGrid radialLines={false} stroke="#FFFFFF" />
        <PolarAngleAxis
          dataKey="kind"
          tickFormatter={formatKind}
          tickLine={false}
          tick={{ fill: '#FFFFFF' }}
          stroke="#FFFFFF"
        />
        <PolarRadiusAxis
          axisLine={false}
          tick={false}
          domain={[0, 'dataMax + 15']}
          tickCount={7}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
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
