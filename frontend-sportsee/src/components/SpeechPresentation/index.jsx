import styles from './styles/speechPresentation.module.scss'
import PropTypes from 'prop-types'

/**
 * This component renders a speech presentation.
 *
 * @category Components
 * @component
 * @returns  { React.JSX.Element } A React element that renders a speech presentation.
 */
function SpeechPresentation(props) {
  const { data, speech } = props
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h1 className={styles.container__title__one}>Bonjour</h1>
        <h1 className={styles.container__title__two}>
          {data.userInfos.firstName}
        </h1>
      </div>

      <p className={styles.container__subtitle}>{speech}</p>
    </div>
  )
}
SpeechPresentation.propTypes = {
  /**
   * User information data -> From the API data.
   */
  data: PropTypes.object.isRequired,
  /**
   * Personalized speech motivation of the user.
   */
  speech: PropTypes.string.isRequired,
}
export default SpeechPresentation
