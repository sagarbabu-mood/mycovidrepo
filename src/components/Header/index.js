import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    const {location} = this.props
    const {pathname} = location
    return (
      <div className="header-container">
        <Link className="link-element" to="/">
          <h1 className="covid19-heading">
            COVID19<span className="india-span">INDIA</span>
          </h1>
        </Link>
        <ul className="desktop-navigation-container">
          <Link className="link-element" to="/">
            <li
              style={{color: pathname === '/' ? '#F8FAFC' : ''}}
              className="header-home-element"
            >
              Home
            </li>
          </Link>
          <Link className="link-element" to="/about">
            <li
              style={{color: pathname === '/about' ? '#F8FAFC' : ''}}
              className="header-home-element"
            >
              About
            </li>
          </Link>
        </ul>
        {/* <div className="mobile-navigation-button">
          <button
            className="button-icon"
            type="button"
            onClick={this.onUpdateNavigation}
          >
            <ImMenu4 className="footer-react-icon" />
          </button>
        </div> */}
      </div>
    )
  }
}

export default withRouter(Header)
