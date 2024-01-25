import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import DisplayCards from '../DisplayCards'
import Footer from '../Footer'
import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class StateSpecificRoute extends Component {
  state = {isLoading: true, specificStateData: {}}

  componentDidMount() {
    this.getStateWiseCovidData()
  }

  getStateWiseCovidData = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    //  console.log(stateCode)
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const response = await fetch(apiUrl)
    const data = await response.json()
    function convertObjectsDataIntoListItemsUsingForInMethod() {
      const resultList = []
      // getting keys of an object object
      const keyNames = Object.keys(data)
      //    if (stateCode !== 'TT' && keyNames.includes(stateCode)) {
      keyNames.forEach(keyName => {
        if (data[keyName]) {
          const {total} = data[keyName]
          // if the state's covid data is available we will store it or we will store 0
          const confirmed = total.confirmed ? total.confirmed : 0
          const deceased = total.deceased ? total.deceased : 0
          const recovered = total.recovered ? total.recovered : 0
          const tested = total.tested ? total.tested : 0
          const population = data[keyName].meta.population
            ? data[keyName].meta.population
            : 0
          const lastUpdated = data[keyName].meta.last_updated

          const {districts} = data[keyName]

          let stateName
          const name = statesList.find(state => state.state_code === keyName)
          if (name !== undefined) {
            stateName = name.state_name
          }
          resultList.push({
            stateCode: keyName,
            stateName,
            confirmed,
            deceased,
            recovered,
            tested,
            population,
            lastUpdated,
            active: confirmed - (deceased + recovered),
            districts,
          })
        }
      })
      // }
      return resultList
    }

    const listFormattedDataUsingForInMethod = convertObjectsDataIntoListItemsUsingForInMethod()
    const respectiveStateValue = listFormattedDataUsingForInMethod.find(
      each => each.stateCode === stateCode,
    )
    this.setState({isLoading: false, specificStateData: respectiveStateValue})
    // console.log(respectiveStateValue)
  }

  displayStateNameAndTestedCount = () => {
    const {specificStateData} = this.state
    const {tested, lastUpdated, stateName} = specificStateData

    const date = new Date(lastUpdated)

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    const dayWithOrdinal = number => {
      const suffixes = ['th', 'st', 'nd', 'rd']
      const v = number % 100
      return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0])
    }

    const formattedDate = date.toLocaleDateString('en-US', options)
    const dayWithoutComma = new Array(formattedDate.replace(',', '').split(' '))
    dayWithoutComma[0][1] = dayWithOrdinal(date.getDate())

    const resultDate = `Last update on ${dayWithoutComma[0].join(' ')}.`

    return (
      <div className="state-specific-name-and-tested-container">
        <div className="state-specific-name-and-date-container">
          <div className="state-specific-name-container">
            <h1 className="state-specific-name">{stateName}</h1>
          </div>
          <p className="state-specific-date">{resultDate}</p>
        </div>
        <div className="state-specific-tested-container">
          <p className="state-specific-tested">Tested</p>
          <p className="state-specific-tested-count">{tested}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading, specificStateData} = this.state
    return (
      <>
        <Header />
        <div className="home-container">
          {isLoading ? (
            <div testid="stateDetailsLoader" className="loader-container">
              <Loader type="Oval" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <div className="search-main-container">
              {this.displayStateNameAndTestedCount()}
              <DisplayCards specificStateData={specificStateData} />
            </div>
          )}
          <Footer />
        </div>
      </>
    )
  }
}

export default StateSpecificRoute
