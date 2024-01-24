import {Component} from 'react'
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
  confirmed: 'CONFIRMED',
  active: 'ACTIVE',
  recovered: 'RECOVERED',
  deceased: 'DECEASED',
}

class DisplayCards extends Component {
  state = {activeCard: cardsConstants.confirmed}

  onUpdateCard = activeCard => {
    this.setState({activeCard})
  }

  displayEachCard = () => {
    const {activeCard} = this.state
    const isConfirmedActive =
      activeCard === cardsConstants.confirmed ? 'confirmed-' : ''
    const isActiveCardActive =
      activeCard === cardsConstants.active ? 'active-' : ''
    const isRecoveredActive =
      activeCard === cardsConstants.recovered ? 'recovered-' : ''
    const isDeceasedActive =
      activeCard === cardsConstants.deceased ? 'deceased-' : ''

    const {specificStateData} = this.props
    const {confirmed, active, recovered, deceased} = specificStateData
    return (
      <>
        <li
          testid="stateSpecificConfirmedCasesContainer"
          className={`state-specific-card confirmed-container ${isConfirmedActive}`}
          onClick={() => {
            this.onUpdateCard('CONFIRMED')
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
            this.onUpdateCard('ACTIVE')
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
            this.onUpdateCard('RECOVERED')
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
            this.onUpdateCard('DECEASED')
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
      </>
    )
  }

  render() {
    return (
      <>
        <div className="state-specific-cards-container">
          {this.displayEachCard()}
        </div>
      </>
    )
  }
}

export default DisplayCards
