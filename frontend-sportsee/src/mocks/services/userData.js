import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../mocks/data'

const UserMockService = {
  getUserInfo: (idUser) => {
    const data = USER_MAIN_DATA.find((d) => d.id === parseInt(idUser))
    return data
  },
  getUserActivity: (idUser) => {
    const data = USER_ACTIVITY.find((d) => d.userId === parseInt(idUser))
    return data
  },
  getUserAverageSessions: (idUser) => {
    const data = USER_AVERAGE_SESSIONS.find(
      (d) => d.userId === parseInt(idUser),
    )
    return data
  },
  getUserPerformance: (idUser) => {
    const data = USER_PERFORMANCE.find((d) => d.userId === parseInt(idUser))
    return data
  },
}
export default UserMockService
