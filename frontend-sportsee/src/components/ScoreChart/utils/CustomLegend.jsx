import PropTypes from 'prop-types'
import '../styles/scoreChart.scss'

function CustomLegend(props) {
  const { score } = props
  return (
    <div className="customLegendScore">
      <p className="customLegendScore__title">
        <span className="customLegendScore__title__header">{`${score}%`}</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
  )
}
//add type to props
CustomLegend.propTypes = {
  score: PropTypes.number,
}
export default CustomLegend
