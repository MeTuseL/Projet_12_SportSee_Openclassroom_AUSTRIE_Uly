import styles from './css/speech.module.css'
import PropTypes from 'prop-types'

function SpeechPresentation(props) {
  const { data, speech } = props
  return (
    <div className={styles.container}>
      <h1
        className={styles.container__title}
      >{`Bonjour ${data.userInfos.firstName}`}</h1>
      <p className={styles.container__subtitle}>{speech}</p>
    </div>
  )
}
SpeechPresentation.propTypes = {
  data: PropTypes.object.isRequired,
  speech: PropTypes.string.isRequired,
}
export default SpeechPresentation
