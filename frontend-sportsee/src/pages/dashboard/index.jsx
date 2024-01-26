// import UserFetchService from '../../services/userData'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import UserMockService from '../../mocks/services/userData'
import styles from './css/dashboard.module.css'

import SimpleBarChart from '../../components/simpleBarChart'
import SimpleAreaChart from '../../components/simpleLineChart'

function Dashboard() {
  //
  const { idUser } = useParams()
  const navigate = useNavigate()
  const [userInfos, setUserInfos] = useState(null)
  const [userActivity, setUserActivity] = useState(null)
  const [userAverageSessions, setUserAverageSessions] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)

  useEffect(() => {
    if (!UserMockService.getUserInfo(idUser)) {
      navigate('/404')
    } else {
      setUserInfos(UserMockService.getUserInfo(idUser))
      setUserActivity(UserMockService.getUserActivity(idUser))
      setUserAverageSessions(UserMockService.getUserAverageSessions(idUser))
      setUserPerformance(UserMockService.getUserPerformance(idUser))
    }
    // UserMockService.getUserInfo(idUser) === undefined
    //   ? navigate('/404')
    //   : setUserInfos(UserMockService.getUserInfo(idUser))

    // UserMockService.getUserActivity(idUser) === undefined
    //   ? navigate('/404')
    //   : setUserActivity(UserMockService.getUserActivity(idUser))

    // UserMockService.getUserAverageSessions(idUser) === undefined
    //   ? navigate('/404')
    //   : setUserAverageSessions(UserMockService.getUserAverageSessions(idUser))

    // UserMockService.getUserPerformance(idUser) === undefined
    //   ? navigate('/404')
    //   : setUserPerformance(UserMockService.getUserPerformance(idUser))
  }, [])

  //     const [userData,setUserData] = useState(null)
  //   useEffect(() => {
  //     UserFetchService.getUserInfo('14').then((activity) => {
  //       console.log(activity)
  //     })
  //   }, [])

  return (
    userInfos && (
      <div className={styles.container}>
        <header>
          <div className={styles.container_header}>
            <h1
              className={styles.container_header__title}
            >{`Bonjour ${userInfos.userInfos.lastName}`}</h1>
            <p className={styles.container_header__subtitle}>
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
        </header>
        <section>
          <div className={styles.container_section}>
            <div style={{ height: '400px' }}>
              <SimpleBarChart
                data={userActivity.sessions}
                barOneUnitName="Poids"
                barOneUnit="kg"
                barTwoUnitName="Calories brûlées"
                barTwoUnit="kCal"
                titleGraph="Activité quotidienne"
              />
            </div>
            <div style={{ height: '100px', margin: '50px' }}></div>
            <div style={{ height: '400px' }}>
              <SimpleAreaChart
                data={userAverageSessions.sessions}
                titleGraph="Durée moyenne des sessions"
              />
            </div>
            <div style={{ height: '100px', margin: '50px' }}></div>
          </div>
        </section>
        <aside>
          <div className={styles.container_aside}></div>
        </aside>
      </div>
    )
  )
}
export default Dashboard
