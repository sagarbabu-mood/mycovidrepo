import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import FaqItem from '../FaqItem'
import './index.css'
import Footer from '../Footer'

class About extends Component {
  state = {isLoading: true}

  componentDidMount() {
    this.getAboutFaqs()
  }

  getAboutFaqs = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-faqs'
    const response = await fetch(apiUrl)

    const data = await response.json()
    this.setState({faqsList: data, isLoading: false})
  }

  render() {
    const {isLoading, faqsList} = this.state
    return (
      <>
        <Header />
        <div className="home-container">
          <div>
            <h1 className="about-heading">About</h1>
            <p className="about-last-update">Last update on march 28th 2021.</p>
            <p className="about-covid-distribution">
              COVID-19 vaccines be ready for distribution
            </p>
          </div>
          {isLoading ? (
            <div testid="aboutRouteLoader" className="loader-container">
              <Loader type="Oval" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <>
              <ul testid="faqsUnorderedList" className="faqs-container">
                {faqsList.faq.map(eachFaq => (
                  <FaqItem key={eachFaq.qno} faqDetails={eachFaq} />
                ))}
              </ul>
            </>
          )}
          <Footer />
        </div>
      </>
    )
  }
}

export default About
