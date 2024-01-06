import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import {BiChevronRightSquare} from 'react-icons/bi'

import Header from '../Header'
import './index.css'
import Footer from '../Footer'

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
  state = {isLoading: false, searchInput: ''}

  onUpdateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  displaySearchResults = filteredStatesList => (
    <ul
      className="search-results-container"
      testid="searchResultsUnorderedList"
    >
      {filteredStatesList.map(eachState => (
        <li className="search-item" key={eachState.state_code}>
          <p className="search-item-state-name">{eachState.state_name}</p>
          <div>
            <p>{eachState.state_code}</p>
            <BiChevronRightSquare />
          </div>
        </li>
      ))}
    </ul>
  )

  render() {
    const {isLoading, searchInput} = this.state

    const filteredStatesList = statesList.filter(eachState =>
      eachState.state_name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    console.log(filteredStatesList)

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
                  this.displaySearchResults(filteredStatesList)}
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
