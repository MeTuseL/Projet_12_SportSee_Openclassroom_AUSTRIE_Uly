import axios from 'axios'

/**
 * An object that contains a list of api services.
 *
 * @category Services
 * @namespace ApiService
 */
const apiService = {
  /**
   * This function will fetch data from an API and then return user information for the specified user ID.
   *
   * @memberOf ApiService
   * @param {number} userId
   * @returns  { Promise<object> } A promise that contains user information for the specified user ID.
   */
  getUserInfos: async (userId) => {
    try {
      const response = await axios(`http://localhost:3000/user/${userId}`)
      if (!response || !response.data) {
        throw new Error('Une erreur inconnue est survenue')
      }
      return response.data.data
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  },
  /**
   * This function will fetch data from an API and then return user activity for the specified user ID.
   *
   * @memberOf ApiService
   * @param {number} userId
   * @returns  { Promise<object> } A promise that contains user activity for the specified user ID.
   */
  getUserActivity: async (userId) => {
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
  },
  /**
   * This function will fetch data from an API and then return user average sessions for the specified user ID.
   *
   * @memberOf ApiService
   * @param {number} userId
   * @returns  { Promise<object> } A promise that contains user average sessions for the specified user ID.
   */
  getUserAverageSessions: async (userId) => {
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
  },
  /**
   * This function will fetch data from an API and then return user performance for the specified user ID.
   *
   * @memberOf ApiService
   * @param {number} userId
   * @returns  { Promise<object> } A promise that contains user performance for the specified user ID.
   */
  getUserPerformance: async (userId) => {
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
  },
}
export default apiService
