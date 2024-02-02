import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import PropTypes from 'prop-types'

import CustomTooltip from './utils/CustomTooltip'

import './styles/activityChart.scss'

import formatDataService from '../../services/formatDataService'

function ActivityChart(props) {
  const {
    data,
    barOneUnitName,
    barOneUnit,
    barTwoUnitName,
    barTwoUnit,
    titleChart,
  } = props

  return (
    <ResponsiveContainer width="100%" height="100%">
      <h2 className="titleActivityChart">{titleChart}</h2>
      <BarChart
        data={data.sessions}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={7}
        barGap={8}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={true}
          vertical={false}
          stroke="var(--text-color-light-4)"
        />
        <XAxis
          dataKey="day"
          tickMargin={15}
          tickLine={false}
          tickFormatter={formatDataService.formatDate}
          // scale="point"
          // padding={{ left: 10, right: 10 }}
          tick={{ fill: 'var(--text-color-light-3)' }}
          stroke="var(--text-color-light-4)"
        />
        <YAxis
          yAxisId="kilogram"
          domain={['dataMin - 2', 'dataMax + 1']}
          orientation="right"
          tickMargin={30}
          tickCount={3}
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'var(--text-color-light-3)' }}
        />
        <YAxis hide={true} yAxisId="calories" />
        <Tooltip
          content={
            <CustomTooltip barOneUnit={barOneUnit} barTwoUnit={barTwoUnit} />
          }
          cursor={{ fill: 'var(--background-color-light-2)' }}
          wrapperStyle={{ left: '7%', bottom: '0px' }}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize="9"
          height={80}
        />
        <Bar
          dataKey="kilogram"
          yAxisId="kilogram"
          name={`${barOneUnitName} (${barOneUnit})`}
          fill="var(--text-color-dark-2)"
          radius={[3.5, 3.5, 0, 0]}
        />
        <Bar
          dataKey="calories"
          yAxisId="calories"
          name={`${barTwoUnitName} (${barTwoUnit})`}
          fill="var(--primary-color-dark)"
          radius={[3.5, 3.5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

//add type to props
ActivityChart.propTypes = {
  data: PropTypes.object.isRequired,
  barOneUnitName: PropTypes.string.isRequired,
  barOneUnit: PropTypes.string.isRequired,
  barTwoUnitName: PropTypes.string.isRequired,
  barTwoUnit: PropTypes.string.isRequired,
  titleChart: PropTypes.string.isRequired,
}

export default ActivityChart
