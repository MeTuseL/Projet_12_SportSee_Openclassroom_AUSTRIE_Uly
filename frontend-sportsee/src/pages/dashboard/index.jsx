import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// import mockService from '../../services/mockService'
import apiService from '../../services/apiService'

import styles from './styles/dashboard.module.scss'
import caloriesIcon from '../../assets/svg/nutrientIcons/calories-icon.svg'
import carbsIcon from '../../assets/svg/nutrientIcons/carbs-icon.svg'
import fatIcon from '../../assets/svg/nutrientIcons/fat-icon.svg'
import proteinIcon from '../../assets/svg/nutrientIcons/protein-icon.svg'

import ActivityChart from '../../components/ActivityChart'
import AveSessionsChart from '../../components/AveSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'
import SpeechPresentation from '../../components/SpeechPresentation'
import NutrientCard from '../../components/NutrientCard'

function Dashboard() {
  //
  document.title = 'Dashboard - SportSee'
  const { idUser } = useParams()
  const navigate = useNavigate()
  const [userInfos, setUserInfos] = useState(null)
  const [userActivity, setUserActivity] = useState(null)
  const [userAverageSessions, setUserAverageSessions] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //mock service
    // !(mockService.getUserInfo(idUser)) && navigate('/404')
    //
    //   setUserInfos(mockService.getUserInfo(idUser))
    //   setUserActivity(mockService.getUserActivity(idUser))
    //   setUserAverageSessions(mockService.getUserAverageSessions(idUser))
    //   setUserPerformance(mockService.getUserPerformance(idUser))
    // }

    //api service
    Promise.all([
      apiService.getUserInfos(idUser),
      apiService.getUserActivity(idUser),
      apiService.getUserAverageSessions(idUser),
      apiService.getUserPerformance(idUser),
    ])
      .then(([dataInfos, dataActivity, dataAveSessions, dataPerformance]) => {
        !dataInfos && navigate('/404')

        setUserInfos(dataInfos)
        setUserActivity(dataActivity)
        setUserAverageSessions(dataAveSessions)
        setUserPerformance(dataPerformance)
      })
      .finally(() => setIsLoading(false))
  }, [idUser, navigate])

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

  if (isLoading) {
    return <h2>Loading...</h2>
  }

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
          <div className={styles.container__section}>
            <div className={styles.container__section__activity}>
              <ActivityChart
                data={userActivity}
                barOneUnitName="Poids"
                barOneUnit="kg"
                barTwoUnitName="Calories brûlées"
                barTwoUnit="kCal"
                titleChart="Activité quotidienne"
              />
            </div>
            <div className={styles.container__section__aveSessions}>
              <AveSessionsChart
                data={userAverageSessions}
                titleGraph="Durée moyenne des sessions"
              />
            </div>
            <div className={styles.container__section__performance}>
              <PerformanceChart data={userPerformance} />
            </div>
            <div className={styles.container__section__score}>
              <ScoreChart data={userInfos} />
            </div>
          </div>
        </section>
        <aside>
          <div className={styles.container__aside}>
            {Object.values(userInfos.keyData).map((nutrientValue, index) => (
              <NutrientCard
                key={`${dataNutrients[index].name}-${index}`}
                picture={dataNutrients[index].picture}
                name={dataNutrients[index].name}
                nutrientCount={`${nutrientValue.toLocaleString()}${dataNutrients[index].unit}`}
              />
            ))}
          </div>
        </aside>
      </div>
    )
  )
}
export default Dashboard
