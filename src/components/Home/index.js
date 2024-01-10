import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'

import Header from '../Header'
import './index.css'
import Footer from '../Footer'
import SearchItem from '../SearchItem'

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

const iconStyle = {
  width: '18px',
  marginLeft: '10px',
}

class Home extends Component {
  state = {isLoading: true, stateWiseData: [], searchInput: ''}

  componentDidMount() {
    this.getCovidData()
  }

  getCovidData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'

    const response = await fetch(apiUrl)
    const data = await response.json()

    function convertObjectsDataIntoListItemsUsingForInMethod() {
      const resultList = []
      // getting keys of an object object
      const keyNames = Object.keys(data)

      keyNames.forEach(keyName => {
        // console.log(keyName)
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

          let stateName
          const name = statesList.find(state => state.state_code === keyName)
          if (name !== undefined) {
            stateName = name.state_name
          }

          resultList.push({
            stateCode: keyName,
            name: stateName,
            confirmed,
            deceased,
            recovered,
            tested,
            population,
            active: confirmed - (deceased + recovered),
          })
        }
      })
      return resultList
    }

    const listFormattedDataUsingForInMethod = convertObjectsDataIntoListItemsUsingForInMethod()
    this.setState({
      stateWiseData: listFormattedDataUsingForInMethod,
      isLoading: false,
    })
  }

  onUpdateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  displaySearchResults = filteredStatesList => (
    <ul
      className="search-results-container"
      testid="searchResultsUnorderedList"
    >
      {filteredStatesList.map(eachState => (
        <SearchItem key={eachState.stateCode} stateDetails={eachState} />
      ))}
    </ul>
  )

  formatData = filteredStatesList =>
    filteredStatesList.map(eachState => ({
      stateName: eachState.state_name,
      stateCode: eachState.state_code,
    }))

  displayStats = () => {
    const {stateWiseData} = this.state

    let totalConfirmed = 0
    let totalActive = 0
    let totalRecovered = 0
    let totalDeceased = 0

    // Iterate through the array and update the counters
    stateWiseData.forEach(state => {
      totalConfirmed += state.confirmed
      totalActive += state.active
      totalRecovered += state.recovered
      totalDeceased += state.deceased
    })

    return (
      <div className="home-stats-container">
        <div
          testid="countryWideConfirmedCases"
          className="stats-card confirmed-container"
        >
          <p className="stats-name">Confirmed</p>
          <img
            src="https://res.cloudinary.com/dud61kulq/image/upload/v1704783712/check-mark_1_g5hjpm.png"
            alt="country wide confirmed cases pic"
          />
          <p className="stats-count">{totalConfirmed}</p>
        </div>

        <div
          testid="countryWideActiveCases"
          className="stats-card active-container"
        >
          <p className="stats-name">Active</p>
          <img
            src="https://res.cloudinary.com/dud61kulq/image/upload/v1704784311/protection_1_e8go1f.png"
            alt="country wide active cases pic"
          />
          <p className="stats-count">{totalActive}</p>
        </div>

        <div
          testid="countryWideRecoveredCases"
          className="stats-card recovered-container"
        >
          <p className="stats-name">Recovered</p>
          <img
            src="https://res.cloudinary.com/dud61kulq/image/upload/v1704784351/recovered_1_dzmw1c.png"
            alt="country wide recovered cases pic"
          />
          <p className="stats-count">{totalRecovered}</p>
        </div>

        <div
          testid="countryWideDeceasedCases"
          className="stats-card deceased-container"
        >
          <p className="stats-name">Deceased</p>
          <img
            src="https://res.cloudinary.com/dud61kulq/image/upload/v1704784383/breathing_1_vmb8gm.png"
            alt="country wide deceased cases pic"
          />
          <p className="stats-count">{totalDeceased}</p>
        </div>
      </div>
    )
  }

  displayStateWiseCovidDataTable = () => {
    const {stateWiseData} = this.state
    console.log(stateWiseData)
    return (
      <div
        className="state-wise-covid-data-table"
        testid="stateWiseCovidDataTable"
      >
        <div className="covid-data-table-header">
          <div className="state-ut-icons-container">
            <p className="states-ut">States/UT</p>
            <FcGenericSortingAsc />
            <FcGenericSortingDesc />
          </div>
          <p>Confirmed</p>
          <p>Active</p>
          <p>Recovered</p>
          <p>Deceased</p>
          <p>Population</p>
        </div>
        <hr className="covid-data-table-hr-line" />
        <div className="covid-data-table-stats-container">
          <ul className="covid-data-table-state-names">
            {stateWiseData.map(eachState => (
              <li
                className="covid-data-table-item name"
                key={eachState.stateCode}
              >
                <p>{eachState.name}</p>
              </li>
            ))}
          </ul>
          <ul className="covid-data-table-confirmed-count">
            {stateWiseData.map(eachState => (
              <li className="covid-data-table-item" key={eachState.stateCode}>
                <p key={eachState.stateCode}>{eachState.confirmed}</p>
              </li>
            ))}
          </ul>
          <ul className="covid-data-table-active-count">
            {stateWiseData.map(eachState => (
              <li className="covid-data-table-item" key={eachState.stateCode}>
                <p key={eachState.stateCode}>{eachState.active}</p>
              </li>
            ))}
          </ul>
          <ul className="covid-data-table-recovered-count">
            {stateWiseData.map(eachState => (
              <li className="covid-data-table-item" key={eachState.stateCode}>
                <p key={eachState.stateCode}>{eachState.recovered}</p>
              </li>
            ))}
          </ul>
          <ul className="covid-data-table-deceased-count">
            {stateWiseData.map(eachState => (
              <li className="covid-data-table-item" key={eachState.stateCode}>
                <p key={eachState.stateCode}>{eachState.deceased}</p>
              </li>
            ))}
          </ul>
          <ul className="covid-data-table-deceased-count">
            {stateWiseData.map(eachState => (
              <li className="covid-data-table-item" key={eachState.stateCode}>
                <p key={eachState.stateCode}>{eachState.population}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading, searchInput} = this.state

    const filteredStatesList = statesList.filter(eachState =>
      eachState.state_name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const formattedSearchStates = this.formatData(filteredStatesList)

    return (
      <>
        <Header />
        <div className="home-container">
          {isLoading ? (
            <div testid="homeRouteLoader" className="loader-container">
              <Loader type="Oval" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <>
              <div className="search-main-container">
                <div className="search-container">
                  <BsSearch
                    className="footer-react-icon"
                    size={10}
                    style={iconStyle}
                  />
                  <input
                    value={searchInput}
                    onChange={this.onUpdateSearchInput}
                    type="search"
                    placeholder="Enter the State"
                    className="search"
                  />
                </div>

                {searchInput !== '' &&
                  this.displaySearchResults(formattedSearchStates)}
                {this.displayStats()}
                {this.displayStateWiseCovidDataTable()}
              </div>
            </>
          )}
          <Footer />
        </div>
      </>
    )
  }
}

export default Home
