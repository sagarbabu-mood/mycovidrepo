import {Component} from 'react'

import Header from '../Header'
import './index.css'
import Footer from '../Footer'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <p>Sagar</p>
          <Footer />
        </div>
      </>
    )
  }
}

export default Home
