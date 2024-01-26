import axios from 'axios'

const UserFetchService = {
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
export default UserFetchService
