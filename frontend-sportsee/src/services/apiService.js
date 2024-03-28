import axios from 'axios'
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from '../__mocks__/data'

/**
 * An class that contains a list of api services.
 *
 * @category Services
 * @namespace ApiService
 */
class apiService {
  /**
   * This function will fetch data from an API or mock data depending on the environment,
   * then return user information for the specified user ID.
   *
   * If the environment variable REACT_APP_ENVIRONMENT is set to "prod", this function will fetch data from the API.
   * Change the value of REACT_APP_ENVIRONMENT if this function should fetch mocked data.
   *
   * @memberOf ApiService
   * @param {number} userId
   * @returns  { Promise<object> } A promise that contains user information for the specified user ID.
   */
  async getUserInfos(userId) {
    if (process.env.REACT_APP_ENVIRONMENT === 'prod') {
      try {
        const response = await axios(`http://localhost:3000/user/${userId}`)
        if (!response || !response.data) {
          throw new Error('Une erreur inconnue est survenue')
        }
        return response.data.data
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    } else {
      const user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId))

      if (user) {
        return user
      } else {
        console.error('Error fetching data')
      }
    }
  }
  /**
   * This function will fetch data from an API or mock data depending on the environment,
   * then return user activity for the specified user ID.
   *
   * If the environment variable REACT_APP_ENVIRONMENT is set to "prod", this function will fetch data from the API.
   * Change the value of REACT_APP_ENVIRONMENT if this function should fetch mocked data.
   *
   * @memberOf ApiService
   * @param {number} userId
   * @returns  { Promise<object> } A promise that contains user activity for the specified user ID.
   */
  async getUserActivity(userId) {
    if (process.env.REACT_APP_ENVIRONMENT === 'prod') {
      try {
        const response = await axios(
          `http://localhost:3000/user/${userId}/activity`,
        )
        if (!response || !response.data) {
          throw new Error('Une erreur inconnue est survenue')
        }
        return response.data.data
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    } else {
      const user = USER_ACTIVITY.find(
        (user) => user.userId === parseInt(userId),
      )

      if (user) {
        return user
      } else {
        console.error('Error fetching data')
      }
    }
  }
  /**
   * This function will fetch data from an API or mock data depending on the environment,
   * then return user average sessions for the specified user ID.
   *
   * If the environment variable REACT_APP_ENVIRONMENT is set to "prod", this function will fetch data from the API.
   * Change the value of REACT_APP_ENVIRONMENT if this function should fetch mocked data.
   *
   * @memberOf ApiService
   * @param {number} userId
   * @returns  { Promise<object> } A promise that contains user average sessions for the specified user ID.
   */
  async getUserAverageSessions(userId) {
    if (process.env.REACT_APP_ENVIRONMENT === 'prod') {
      try {
        const response = await axios(
          `http://localhost:3000/user/${userId}/average-sessions`,
        )
        if (!response || !response.data) {
          throw new Error('Une erreur inconnue est survenue')
        }
        return response.data.data
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    } else {
      const user = USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === parseInt(userId),
      )

      if (user) {
        return user
      } else {
        console.error('Error fetching data')
      }
    }
  }
  /**
   * This function will fetch data from an API or mock data depending on the environment,
   * then return user performance for the specified user ID.
   *
   * If the environment variable REACT_APP_ENVIRONMENT is set to "prod", this function will fetch data from the API.
   * Change the value of REACT_APP_ENVIRONMENT if this function should fetch mocked data.
   *
   * @memberOf ApiService
   * @param {number} userId
   * @returns  { Promise<object> } A promise that contains user performance for the specified user ID.
   */
  async getUserPerformance(userId) {
    if (process.env.REACT_APP_ENVIRONMENT === 'prod') {
      try {
        const response = await axios(
          `http://localhost:3000/user/${userId}/performance`,
        )
        if (!response || !response.data) {
          throw new Error('Une erreur inconnue est survenue')
        }
        return response.data.data
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    } else {
      const user = USER_PERFORMANCE.find(
        (user) => user.userId === parseInt(userId),
      )

      if (user) {
        return user
      } else {
        console.error('Error fetching data')
      }
    }
  }
}
export default apiService
