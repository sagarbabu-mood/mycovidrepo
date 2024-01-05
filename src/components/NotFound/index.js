import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dud61kulq/image/upload/v1704434617/Group_7484_xsvviv.png"
      alt="not found"
      className="not-found-image"
    />
    <h1 className="not-found-heading">PAGE NOT FOUND</h1>
    <p className="not-found-description">
      we’re sorry, the page you requested could not be found Please go back to
      the homepage
    </p>
    <button className="home-button" type="button">
      Home
    </button>
  </div>
)

export default NotFound
