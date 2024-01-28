// import UserFetchService from '../../services/userData'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import mockService from '../../services/mockService'

import styles from './css/dashboard.module.css'
import caloriesIcon from '../../assets/svg/calories-icon.svg'
import carbsIcon from '../../assets/svg/carbs-icon.svg'
import fatIcon from '../../assets/svg/fat-icon.svg'
import proteinIcon from '../../assets/svg/protein-icon.svg'

import ActivityChart from '../../components/ActivityChart'
import AveSessionsChart from '../../components/AveSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'
import SpeechPresentation from '../../components/SpeechPresentation'
import NutrientCard from '../../components/NutrientCard'

function Dashboard() {
  //
  const { idUser } = useParams()
  const navigate = useNavigate()
  const [userInfos, setUserInfos] = useState(null)
  const [userActivity, setUserActivity] = useState(null)
  const [userAverageSessions, setUserAverageSessions] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)

  useEffect(() => {
    if (!mockService.getUserInfo(idUser)) {
      navigate('/404')
    } else {
      setUserInfos(mockService.getUserInfo(idUser))
      setUserActivity(mockService.getUserActivity(idUser))
      setUserAverageSessions(mockService.getUserAverageSessions(idUser))
      setUserPerformance(mockService.getUserPerformance(idUser))
    }
    // mockService.getUserInfo(idUser) === undefined
    //   ? navigate('/404')
    //   : setUserInfos(mockService.getUserInfo(idUser))

    // mockService.getUserActivity(idUser) === undefined
    //   ? navigate('/404')
    //   : setUserActivity(mockService.getUserActivity(idUser))

    // mockService.getUserAverageSessions(idUser) === undefined
    //   ? navigate('/404')
    //   : setUserAverageSessions(mockService.getUserAverageSessions(idUser))

    // mockService.getUserPerformance(idUser) === undefined
    //   ? navigate('/404')
    //   : setUserPerformance(mockService.getUserPerformance(idUser))
  }, [idUser, navigate])

  //     const [userData,setUserData] = useState(null)
  //   useEffect(() => {
  //     UserFetchService.getUserInfo('14').then((activity) => {
  //       console.log(activity)
  //     })
  //   }, [])
  const dataNutrients = [
    {
      name: 'Calories',
      picture: caloriesIcon,
    },
    {
      name: 'Proteines',
      picture: proteinIcon,
    },
    {
      name: 'Glucides',
      picture: carbsIcon,
    },
    {
      name: 'Lipides',
      picture: fatIcon,
    },
  ]
  return (
    userInfos && (
      <div className={styles.container}>
        <header>
          <SpeechPresentation
            data={userInfos}
            speech="Félicitation ! Vous avez explosé vos objectifs hier 👏"
          />
        </header>
        <section>
          <div className={styles.container_section}>
            <div style={{ height: '400px' }}>
              <ActivityChart
                data={userActivity}
                barOneUnitName="Poids"
                barOneUnit="kg"
                barTwoUnitName="Calories brûlées"
                barTwoUnit="kCal"
                titleGraph="Activité quotidienne"
              />
            </div>
            <div style={{ height: '100px', margin: '50px' }}></div>
            <div style={{ height: '400px' }}>
              <AveSessionsChart
                data={userAverageSessions}
                titleGraph="Durée moyenne des sessions"
              />
            </div>
            <div style={{ height: '100px', margin: '50px' }}></div>
            <div style={{ height: '400px' }}>
              <PerformanceChart data={userPerformance} />
            </div>
            <div style={{ height: '100px', margin: '50px' }}></div>
            <div style={{ height: '400px' }}>
              <ScoreChart data={userInfos} />
            </div>
          </div>
        </section>
        <aside>
          <div className={styles.container_aside}>
            {Object.values(userInfos.keyData).map((nutrient, index) => (
              <NutrientCard
                key={`${dataNutrients[index].name}-${index}`}
                picture={dataNutrients[index].picture}
                name={dataNutrients[index].name}
                nutrientCount={nutrient}
              />
            ))}
          </div>
        </aside>
      </div>
    )
  )
}
export default Dashboard
