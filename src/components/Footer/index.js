import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-inner-container">
      <h1 className="covid19-heading">
        COVID19<span className="india-span">INDIA</span>
      </h1>
      <p className="footer-description">
        we stand with everyone fighting on the front lines
      </p>
      <div className="footer-icons-container">
        <VscGithubAlt className="footer-react-icon" />
        <FiInstagram className="footer-react-icon" />
        <FaTwitter className="footer-react-icon" />
      </div>
    </div>
  </div>
)

export default Footer
