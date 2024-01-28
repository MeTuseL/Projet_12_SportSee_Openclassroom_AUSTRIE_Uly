import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'
import PropTypes from 'prop-types'
import CustomActiveShape from './CustomActiveShape'

function ScoreChart(props) {
  const { data } = props

  const formatScore = data.score === undefined ? data.todayScore : data.score
  const pourcentScore = formatScore * 100
  const remainsPourcentScore = 100 - pourcentScore
  const dataPieScore = [
    { value: pourcentScore },
    { value: remainsPourcentScore },
  ]
  const COLORS = ['#FF0000', '#FBFBFB']

  return (
    <ResponsiveContainer width="100%" height="100%">
      <h2 style={{ color: '#FF0000' }}>Score</h2>
      <PieChart width={50} height={50} style={{ backgroundColor: '#FBFBFB' }}>
        <Pie
          data={dataPieScore}
          dataKey="value"
          innerRadius={0}
          outerRadius={70}
          fill="white"
          blendStroke
          isAnimationActive={false}
        />
        <Pie
          data={dataPieScore}
          dataKey="value"
          innerRadius={67}
          outerRadius={75}
          fill="#FBFBFB"
          blendStroke
          isAnimationActive={false}
        />
        <Pie
          data={dataPieScore}
          dataKey="value"
          activeIndex={0}
          activeShape={<CustomActiveShape />}
          innerRadius={67}
          outerRadius={75}
          startAngle={220}
          endAngle={-220}
          paddingAngle={1}
          fill="none"
          blendStroke
          cornerRadius={50}
        >
          {dataPieScore.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
ScoreChart.propTypes = {
  data: PropTypes.object.isRequired,
}
export default ScoreChart
