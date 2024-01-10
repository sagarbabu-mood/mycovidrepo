import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dud61kulq/image/upload/v1704434617/Group_7484_xsvviv.png"
      alt="not-found-pic"
      className="not-found-image"
    />
    <h1 className="not-found-heading">PAGE NOT FOUND</h1>
    <p className="not-found-description">
      we are sorry, the page you requested could not be found
    </p>
    <Link to="/">
      <button className="home-button" type="button">
        Home
      </button>
    </Link>
  </div>
)

export default NotFound
