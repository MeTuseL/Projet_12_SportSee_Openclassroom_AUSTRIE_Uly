const formatDataService = {
  formatDate: (value) => {
    return new Date(value).getUTCDate()
  },
  formatDay: (value) => {
    const listLabelDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return listLabelDay[value - 1]
  },
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
  formatScore: (data) => {
    const formatScore = !data.score ? data.todayScore : data.score
    const pourcentScore = formatScore * 100
    const dataPourcentScore = { value: pourcentScore }

    return dataPourcentScore
  },
}
export default formatDataService
