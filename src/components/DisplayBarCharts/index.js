import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  BarChart,
  Bar,
} from 'recharts'

class DisplayBarCharts extends Component {
  state = {isLoading: true, districtsData: []}

  componentDidMount() {
    this.getBarChartData()
  }

  getBarChartData = async () => {
    const {stateCode} = this.props
    const apiUrl = `https://apis.ccbp.in/covid19-timelines-data/${stateCode}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      this.setState({districtsData: data, isLoading: false})
    }
  }

  getFormattedData = () => {
    const {districtsData} = this.state
    const {stateCode} = this.props
    const {dates} = districtsData[stateCode]
    const keyNames = Object.keys(dates)

    const result = []
    keyNames.forEach(keyName => {
      if (dates[keyName]) {
        const {total} = dates[keyName]
        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0

        result.push({
          date: keyName,
          confirmed,
          deceased,
          recovered,
          tested,
          active: confirmed - (deceased + recovered),
        })
      }
    })

    return result
  }

  renderBarChart = lastTenDaysData => {
    const {activeCard} = this.props
    return (
      <div>
        <BarChart width={800} height={450} data={lastTenDaysData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey={activeCard}
            fill="#8884d8"
            className="bar"
            label={{position: 'top', color: 'white'}}
          />
        </BarChart>
      </div>
    )
  }

  renderLineCharts = data => {
    const {activeCard} = this.props

    // console.log(data, activeCard)
    return (
      <div testid="lineChartsContainer">
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="confirmed" stroke="#8884d8" />
        </LineChart>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="active" stroke="#8884d8" />
        </LineChart>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="recovered" stroke="#8884d8" />
        </LineChart>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="deceased" stroke="#8884d8" />
        </LineChart>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="tested" stroke="#8884d8" />
        </LineChart>
      </div>
    )
  }

  renderAllChartsData = () => {
    const result = this.getFormattedData()
    const lastTenDaysData = result.reverse().splice(0, 10)

    return (
      <div>
        {this.renderBarChart(lastTenDaysData)}
        <h1>Daily Spread Trends</h1>
        {this.renderLineCharts(lastTenDaysData)}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div testid="timelinesDataLoader" className="loader-container">
            <Loader type="Oval" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderAllChartsData()
        )}
      </>
    )
  }
}

export default DisplayBarCharts
