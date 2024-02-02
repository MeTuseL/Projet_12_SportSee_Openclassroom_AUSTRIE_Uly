import caloriesIcon from '../assets/svg/nutrientIcons/calories-icon.svg'
import carbsIcon from '../assets/svg/nutrientIcons/carbs-icon.svg'
import fatIcon from '../assets/svg/nutrientIcons/fat-icon.svg'
import proteinIcon from '../assets/svg/nutrientIcons/protein-icon.svg'

/**
 * An object that contains a list of formatted data services.
 *
 * @category Services
 * @namespace FormatDataService
 */
const formatDataService = {
  /**
   * This function will retrieve the day of the month from the date data of the user's activity.
   *
   * @memberOf FormatDataService
   * @param {string} value
   * @returns  { number } A number representing the day of the month for this date according to Coordinated Universal Time (UTC).
   */
  formatDate: (value) => {
    return new Date(value).getUTCDate()
  },
  /**
   * This function will retrieve the first letter of the day data of the user's average sessions.
   *
   * @memberOf FormatDataService
   * @param {number} value
   * @returns  { string } A string of the label of the day corresponding to its index.
   */
  formatDay: (value) => {
    const listLabelDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return listLabelDay[value - 1]
  },
  /**
   * This function will translate the kind data of the user's performance.
   *
   * @memberOf FormatDataService
   * @param {number} value
   * @returns  { string } A string of the translated kind corresponding to its index.
   */
  formatKind: (value) => {
    const translatedKind = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    }
    return translatedKind[value]
  },
  /**
   * This function will transform the score data of the user information into a percentage.
   *
   * @memberOf FormatDataService
   * @param {object} data
   * @returns  { object } An object of the score percentage data from the user information.
   */
  formatScore: (data) => {
    const formatScore = !data.score ? data.todayScore : data.score
    const pourcentScore = formatScore * 100
    const dataPourcentScore = { value: pourcentScore }

    return dataPourcentScore
  },
  /**
   * This function will retrieve the translated nutrient, its unit, and picture data from the quantity nutrient index.
   *
   * @memberOf FormatDataService
   * @param {number} value
   * @returns  { object } An object containing the translated nutrient, its unit, and picture data corresponding to its index.
   */
  formatNutrient: (value) => {
    const dataNutrients = [
      {
        name: 'Calories',
        unit: 'kcal',
        picture: caloriesIcon,
      },
      {
        name: 'Proteines',
        unit: 'g',
        picture: proteinIcon,
      },
      {
        name: 'Glucides',
        unit: 'g',
        picture: carbsIcon,
      },
      {
        name: 'Lipides',
        unit: 'g',
        picture: fatIcon,
      },
    ]

    return dataNutrients[value]
  },
}
export default formatDataService
