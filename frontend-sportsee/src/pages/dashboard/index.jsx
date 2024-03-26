import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import ApiService from '../../services/apiService'
import formatDataService from '../../services/formatDataService'

import styles from './styles/dashboard.module.scss'

import ActivityChart from '../../components/ActivityChart'
import AveSessionsChart from '../../components/AveSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'
import SpeechPresentation from '../../components/SpeechPresentation'
import NutrientCard from '../../components/NutrientCard'

/**
 * This component renders a user profile page with this data.
 *
 * @category Pages
 * @component
 * @returns  { React.JSX.Element } A React element that renders a user profile page with this data.
 */
function Dashboard() {
  document.title = 'Dashboard - SportSee'
  const { idUser } = useParams()
  const navigate = useNavigate()
  const [userInfos, setUserInfos] = useState(null)
  const [userActivity, setUserActivity] = useState(null)
  const [userAverageSessions, setUserAverageSessions] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //api service
    const apiService = new ApiService()
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
              <ActivityChart data={userActivity} />
            </div>
            <div className={styles.container__section__aveSessions}>
              <AveSessionsChart data={userAverageSessions} />
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
                key={`${formatDataService.formatNutrient(index).name}-${index}`}
                picture={formatDataService.formatNutrient(index).picture}
                name={formatDataService.formatNutrient(index).name}
                nutrientQuantity={`${nutrientValue.toLocaleString()}${formatDataService.formatNutrient(index).unit}`}
              />
            ))}
          </div>
        </aside>
      </div>
    )
  )
}
export default Dashboard
