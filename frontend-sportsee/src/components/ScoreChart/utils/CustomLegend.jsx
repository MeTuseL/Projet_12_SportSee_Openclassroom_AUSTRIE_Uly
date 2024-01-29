import PropTypes from 'prop-types'

function CustomLegend(props) {
  const { score } = props
  return (
    <div className="goalChart__legend">
      <p>
        <span className="goalChart__percentage">{`${score}%`}</span>
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
