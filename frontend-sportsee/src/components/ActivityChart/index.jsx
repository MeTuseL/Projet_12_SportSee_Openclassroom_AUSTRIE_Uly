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

import CustomToolTip from './utils/customToolTip'

function ActivityChart(props) {
  const {
    data,
    barOneUnitName,
    barOneUnit,
    barTwoUnitName,
    barTwoUnit,
    titleGraph,
  } = props

  const formatDay = (value) => {
    return new Date(value).getUTCDate()
  }

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      style={{
        backgroundColor: '#FBFBFB',
        boxShadow: '0px 2px 4px 0px #00000005',
        padding: '25px',
      }}
    >
      <h2>{titleGraph}</h2>
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
        />
        <XAxis
          dataKey="day"
          tickMargin={15}
          tickLine={false}
          tickFormatter={formatDay}
          // scale="point"
          // padding={{ left: 10, right: 10 }}
          tick={{ fill: '#9B9EAC' }}
          stroke="#DEDEDE"
        />
        <YAxis
          yAxisId="kilogram"
          domain={['dataMin - 2', 'dataMax + 1']}
          orientation="right"
          tickMargin={30}
          tickCount={3}
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#9B9EAC' }}
        />
        <YAxis hide={true} yAxisId="calories" />
        <Tooltip
          content={
            <CustomToolTip barOneUnit={barOneUnit} barTwoUnit={barTwoUnit} />
          }
          cursor={{ fill: '#C4C4C480' }}
          wrapperStyle={{ left: '7%', bottom: '0px' }}
          background={{ fill: 'red' }}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize="10"
          height={80}
        />
        <Bar
          dataKey="kilogram"
          yAxisId="kilogram"
          name={`${barOneUnitName} (${barOneUnit})`}
          fill="#282D30"
          radius={[3.5, 3.5, 0, 0]}
        />
        <Bar
          dataKey="calories"
          yAxisId="calories"
          name={`${barTwoUnitName} (${barTwoUnit})`}
          fill="#E60000"
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
  titleGraph: PropTypes.string.isRequired,
}

export default ActivityChart
