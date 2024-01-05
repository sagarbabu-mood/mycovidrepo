import {Link, withRouter} from 'react-router-dom'

import './index.css'

function Header(props) {
  const {location} = props
  const {pathname} = location
  return (
    <div className="header-container">
      <Link className="link-element" to="/">
        <h1 className="covid19-heading">
          COVID19<span className="india-span">INDIA</span>
        </h1>
      </Link>
      <div className="desktop-navigation-container">
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
      </div>
    </div>
  )
}

export default withRouter(Header)
