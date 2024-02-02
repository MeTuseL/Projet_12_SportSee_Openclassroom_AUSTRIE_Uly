import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../__mocks__/data'

/**
 * An object that contains a list of mock services.
 *
 * @category Services
 */
const mockService = {
  /**
   * This function will retrieve data from mocked data and then return user information for the specified user ID.
   *
   * @param {number} userId
   * @returns  { object } A object that contains user information for the specified user ID.
   */
  getUserInfo: (userId) => {
    const data = USER_MAIN_DATA.find((d) => d.id === parseInt(userId))
    return data
  },
  /**
   * This function will retrieve data from mocked data and then return user activity for the specified user ID.
   *
   * @param {number} userId
   * @returns  { object } A object that contains user activity for the specified user ID.
   */
  getUserActivity: (userId) => {
    const data = USER_ACTIVITY.find((d) => d.userId === parseInt(userId))
    return data
  },
  /**
   * This function will retrieve data from mocked data and then return user average sessions for the specified user ID.
   *
   * @param {number} userId
   * @returns  { object } A object that contains user average sessions for the specified user ID.
   */
  getUserAverageSessions: (userId) => {
    const data = USER_AVERAGE_SESSIONS.find(
      (d) => d.userId === parseInt(userId),
    )
    return data
  },
  /**
   * This function will retrieve data from mocked data and then return user performance for the specified user ID.
   *
   * @param {number} userId
   * @returns  { object } A object that contains user performance for the specified user ID.
   */
  getUserPerformance: (userId) => {
    const data = USER_PERFORMANCE.find((d) => d.userId === parseInt(userId))
    return data
  },
}
export default mockService
