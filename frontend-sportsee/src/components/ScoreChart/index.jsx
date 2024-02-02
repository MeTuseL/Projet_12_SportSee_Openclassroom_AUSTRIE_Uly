import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import PropTypes from 'prop-types'
import CustomLegendScore from './utils/CustomLegendScore'
import formatDataService from '../../services/formatDataService'
import './styles/scoreChart.scss'

/**
 * This component renders a score chart using recharts.
 *
 * @category Components
 * @component
 * @returns  { React.JSX.Element } A React element that renders a score chart using recharts.
 */
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
            <CustomLegendScore
              score={formatDataService.formatScore(data).value}
            />
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
  /**
   * Score data of user -> From the Api data.
   */
  data: PropTypes.object.isRequired,
}
export default ScoreChart
