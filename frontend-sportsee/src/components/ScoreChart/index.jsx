import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import PropTypes from 'prop-types'
import CustomLegend from './utils/CustomLegend'

import formatDataService from '../../services/formatDataService'
import './styles/scoreChart.scss'

function ScoreChart(props) {
  const { data } = props

  return (
    <ResponsiveContainer width="100%" height="100%">
      <h2 className="titleScoreChart">Score</h2>

      <RadialBarChart
        innerRadius="0%"
        outerRadius="0%"
        startAngle={220}
        endAngle={-143}
        data={[formatDataService.formatScore(data)]}
      >
        <RadialBar
          data={[{ value: 101 }]}
          dataKey="value"
          barSize={170}
          fill="var(--background-color)"
          isAnimationActive={false}
        />
        <RadialBar
          dataKey="value"
          barSize={10}
          cornerRadius={50}
          fill="var(--primary-color-light)"
        />

        <Legend
          content={
            <CustomLegend score={formatDataService.formatScore(data).value} />
          }
          iconType="none"
          layout="vertical"
          align="center"
          verticalAlign="middle"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}
ScoreChart.propTypes = {
  data: PropTypes.object.isRequired,
}
export default ScoreChart
