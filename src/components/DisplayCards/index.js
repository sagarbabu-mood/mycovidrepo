import {Component} from 'react'

import DisplayBarCharts from '../DisplayBarCharts'

// import {
//   LineChart,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Line,
//   BarChart,
//   Bar,
// } from 'recharts'

import './index.css'

// const cardsArray = [
//   {
//     cardType: 'CONFIRMED',
//     content: 'Confirmed',
//     bgColor: '#331427',
//     color: '#FF073A',
//     imageUrl:
//       'https://res.cloudinary.com/dud61kulq/image/upload/v1704783712/check-mark_1_g5hjpm.png',
//   },
//   {
//     cardType: 'ACTIVE',
//     content: 'Active',
//     bgColor: '#132240',
//     color: '#007BFF',
//     imageUrl:
//       'https://res.cloudinary.com/dud61kulq/image/upload/v1704784311/protection_1_e8go1f.png',
//   },
//   {
//     cardType: 'RECOVERED',
//     content: 'Recovered',
//     bgColor: '#182829',
//     color: '#28A745',
//     imageUrl:
//       'https://res.cloudinary.com/dud61kulq/image/upload/v1704784351/recovered_1_dzmw1c.png',
//   },
//   {
//     cardType: 'DECEASED',
//     content: 'Deceased',
//     bgColor: '#212230',
//     color: '#6C757D',
//     imageUrl:
//       'https://res.cloudinary.com/dud61kulq/image/upload/v1704784383/breathing_1_vmb8gm.png',
//   },
// ]

const cardsConstants = {
  confirmed: 'confirmed',
  active: 'active',
  recovered: 'recovered',
  deceased: 'deceased',
}

class DisplayCards extends Component {
  state = {activeCard: cardsConstants.confirmed}

  onUpdateCard = activeCard => {
    this.setState({activeCard})
  }

  displayEachCard = () => {
    const {activeCard} = this.state
    const isConfirmedActive =
      activeCard === cardsConstants.confirmed ? 'confirmed' : ''
    const isActiveCardActive =
      activeCard === cardsConstants.active ? 'active' : ''
    const isRecoveredActive =
      activeCard === cardsConstants.recovered ? 'recovered' : ''
    const isDeceasedActive =
      activeCard === cardsConstants.deceased ? 'deceased' : ''

    const {specificStateData} = this.props
    const {confirmed, active, recovered, deceased} = specificStateData
    return (
      <>
        <div className="state-specific-cards-container">
          <li
            testid="stateSpecificConfirmedCasesContainer"
            className={`state-specific-card confirmed-container ${isConfirmedActive}`}
            onClick={() => {
              this.onUpdateCard('confirmed')
            }}
          >
            <p className="stats-name">Confirmed</p>
            <img
              src="https://res.cloudinary.com/dud61kulq/image/upload/v1704783712/check-mark_1_g5hjpm.png"
              alt="state specific confirmed cases pic"
            />
            <p className="stats-count">{confirmed}</p>
          </li>
          <li
            onClick={() => {
              this.onUpdateCard('active')
            }}
            testid="stateSpecificActiveCasesContainer"
            className={`state-specific-card active-container ${isActiveCardActive}`}
          >
            <p className="stats-name">Active</p>
            <img
              src="https://res.cloudinary.com/dud61kulq/image/upload/v1704784311/protection_1_e8go1f.png"
              alt="state specific active cases pic"
            />
            <p className="stats-count">{active}</p>
          </li>
          <li
            onClick={() => {
              this.onUpdateCard('recovered')
            }}
            testid="stateSpecificRecoveredCasesContainer"
            className={`recovered-container state-specific-card ${isRecoveredActive}`}
          >
            <p className="stats-name">Recovered</p>
            <img
              src="https://res.cloudinary.com/dud61kulq/image/upload/v1704784351/recovered_1_dzmw1c.png"
              alt="state specific recovered cases pic"
            />
            <p className="stats-count">{recovered}</p>
          </li>
          <li
            onClick={() => {
              this.onUpdateCard('deceased')
            }}
            testid="stateSpecificDeceasedCasesContainer"
            className={`deceased-container state-specific-card ${isDeceasedActive}`}
          >
            <p className="stats-name">Deceased</p>
            <img
              src="https://res.cloudinary.com/dud61kulq/image/upload/v1704784383/breathing_1_vmb8gm.png"
              alt="state specific deceased cases pic"
            />
            <p className="stats-count">{deceased}</p>
          </li>
        </div>
      </>
    )
  }

  convertObjectsDataIntoListItemsUsingForInMethod = () => {
    const {specificStateData} = this.props
    const {activeCard} = this.state
    const {districts} = specificStateData

    const keyNames = Object.keys(districts)
    const result = []
    keyNames.forEach(keyName => {
      if (districts[keyName]) {
        const {total} = districts[keyName]
        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0

        result.push({
          districtName: keyName,
          confirmed,
          deceased,
          recovered,
          tested,
          active: confirmed - (deceased + recovered),
        })
      }
    })

    result.sort((a, b) => {
      const nameA = a[activeCard] // ignore upper and lowercase
      const nameB = b[activeCard] // ignore upper and lowercase
      if (nameA < nameB) {
        return 1
      }
      if (nameA > nameB) {
        return -1
      }

      return 0
    })

    return result
  }

  displayTopDistricts = districtsData => {
    const {activeCard} = this.state

    return (
      <div className="districts-main-container">
        <h1 className={`districts-heading ${activeCard}-`}>Top Districts</h1>
        <ul
          testid="topDistrictsUnorderedList"
          className="districts-inner-container"
        >
          {districtsData.map(eachDistrict => (
            <li className="district-item" key={eachDistrict.districtName}>
              <p className="district-count">{eachDistrict[activeCard]}</p>
              <p className="district-name">{eachDistrict.districtName}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {activeCard} = this.state
    const {specificStateData} = this.props
    const {stateCode} = specificStateData
    const districtsData = this.convertObjectsDataIntoListItemsUsingForInMethod()
    return (
      <>
        {this.displayEachCard()}
        {this.displayTopDistricts(districtsData)}
        <DisplayBarCharts activeCard={activeCard} stateCode={stateCode} />
      </>
    )
  }
}

export default DisplayCards
